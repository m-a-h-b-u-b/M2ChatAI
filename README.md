# M2ChatAI

A real-time AI chatbot built with **Node.js, TypeScript, and Socket.io**. Integrates with **OpenAI GPT API** to provide intelligent responses for users.

## Features

* Real-time chat via WebSockets
* AI-powered responses (GPT / NLP)
* MongoDB database for conversation logs
* JWT-based authentication
* Unit & integration testing included
* Modular architecture for scalability

## Tech Stack

* Node.js + TypeScript
* Express.js
* Socket.io
* MongoDB / PostgreSQL
* OpenAI API
* Jest for testing

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/yourusername/M2ChatAI.git
cd M2ChatAI
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_jwt_secret
```

4. Run the server:

```bash
npm run dev
```

5. Run tests:

```bash
npm test
```

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

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
