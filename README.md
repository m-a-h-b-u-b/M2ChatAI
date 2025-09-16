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

![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue?style=flat-square)  
![Dual License](https://img.shields.io/badge/License-Dual%20License-green?style=flat-square) 

This project is **dual-licensed**:

- **Open-Source / Personal Use:** Apache 2.0  
- **Commercial / Closed-Source Use:** Proprietary license required 

For commercial licensing inquiries or enterprise use, please contact: [mahbub.aaman.app@gmail.com](mailto:mahbub.aaman.app@gmail.com)

---

## Author

**Md Mahbubur Rahman**
[GitHub](https://github.com/m-a-h-b-u-b) | [Website](https://m-a-h-b-u-b.github.io)

---