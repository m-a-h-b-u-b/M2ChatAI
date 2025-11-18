terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  required_version = ">= 1.4.0"
}

provider "aws" {
  region = var.aws_region
}

resource "aws_ecr_repository" "m2chat" {
  name = "m2chatai"
}

resource "aws_ecs_cluster" "this" {
  name = "m2chat-cluster"
}

resource "aws_iam_role" "ecs_task_execution" {
  name = "ecs_task_exec_role"
  assume_role_policy = data.aws_iam_policy_document.ecs_task_assume.json
}

data "aws_iam_policy_document" "ecs_task_assume" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role_policy_attachment" "exec_attach" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_ecs_task_definition" "m2chat" {
  family                   = "m2chat-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([
    {
      name      = "m2chat"
      image     = "${aws_ecr_repository.m2chat.repository_url}:latest"
      essential = true
      portMappings = [{ containerPort = 5000, hostPort = 5000 }]
      environment = [
        { name = "MONGO_URI", value = "<your_mongo_connection>" },
        { name = "JWT_SECRET", value = "<secure-secret>" }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/m2chat"
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "m2chat"
        }
      }
    }
  ])
}

resource "aws_ecs_service" "m2chat" {
  name            = "m2chat-service"
  cluster         = aws_ecs_cluster.this.id
  task_definition = aws_ecs_task_definition.m2chat.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  network_configuration {
    subnets         = var.private_subnets
    security_groups = [var.ecs_sg]
    assign_public_ip = true
  }
}
