variable "aws_region" {}
variable "private_subnets" { type = list(string) }
variable "ecs_sg" { type = string }
