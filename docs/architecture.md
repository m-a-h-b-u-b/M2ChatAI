# M2ChatAI Architecture

## Overview
M2ChatAI is a real-time AI chatbot built with Node.js, TypeScript, and Socket.io. 
It integrates with AI services (like OpenAI GPT) to provide intelligent responses 
and stores chat history in MongoDB.

---

## Folder Structure
```
M2ChatAI/
├── src/
│   ├── index.ts
│   ├── server.ts
│   ├── config/
│   │   └── db.ts
│   ├── routes/
│   │   └── chat.ts
│   ├── controllers/
│   │   └── chatController.ts
│   ├── services/
│   │   ├── aiService.ts
│   │   └── dbService.ts
│   ├── models/
│   │   └── message.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   └── utils/
│       └── logger.ts
├── tests/
│   └── chat.test.ts
├── docs/
│   └── architecture.md
├── README.md
├── LICENSE
├── .gitignore
├── package.json
└── tsconfig.json
```


---

## Components

### 1. `server.ts`
- Entry point for the application.
- Initializes Express server and Socket.io for real-time communication.
- Connects to MongoDB using `db.ts`.

### 2. `routes/`
- Defines API endpoints.
- `chat.ts` handles `/api/chat/message` for sending and receiving chat messages.

### 3. `controllers/`
- Handles business logic.
- `chatController.ts` calls AI services and formats responses.

### 4. `services/`
- `aiService.ts` handles AI response logic (e.g., OpenAI GPT integration).
- `dbService.ts` manages database interactions for storing/retrieving messages.

### 5. `models/`
- `message.ts` defines the Mongoose schema for chat messages.

### 6. `middleware/`
- `auth.ts` handles JWT authentication.
- `errorHandler.ts` manages global error handling.

### 7. `utils/`
- `logger.ts` provides timestamped logging utilities.

### 8. `tests/`
- Contains Jest tests for API endpoints and services.

---

## Data Flow

1. User sends a message via `/api/chat/message`.
2. Request passes through `auth` middleware (if enabled).
3. `chatController` receives the message and calls `aiService`.
4. `aiService` generates a response.
5. `dbService` stores the user message and AI response in MongoDB.
6. Response is sent back to the user in JSON format.
7. Socket.io broadcasts messages for real-time updates (if connected).

---

## Future Enhancements

- Integrate with OpenAI GPT API for smarter AI responses.
- Add WebSocket authentication and rooms for multiple users.
- Implement message streaming for partial AI responses.
- Enhance logging with a library like Winston for production.
- Add Docker setup for easy deployment.
