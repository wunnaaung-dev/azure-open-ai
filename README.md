# 🔧 Azure OpenAI Chat Bot API (Backend)

This is the backend API for the **Mindy Wunna** chat bot. It uses **Azure OpenAI** services to process user input and return AI-generated responses. The API is built with **Express.js**, uses **serverless-http** for deployment on AWS Lambda, and integrates securely with the Azure OpenAI SDK.

---

## 🚀 Tech Stack

- **Azure OpenAI SDK** – Access GPT models hosted on Azure.
- **Express.js** – Web framework for defining API routes.
- **Serverless HTTP** – Enables running Express apps on AWS Lambda.

---

## 📝 Setup Instructions

### 1. Register for Azure OpenAI API

Sign up for access and get your API key and endpoint:  
🔗 [https://ai.azure.com/?tid=3b2b947c-fc02-41b0-9230-9b5a3d92e761](https://ai.azure.com/?tid=3b2b947c-fc02-41b0-9230-9b5a3d92e761)

### 2. Add Environment Variables

Create a `.env` file in the root of the backend folder and add:

```env
AZURE_OPENAI_ENDPOINT=<Your Azure OpenAI Endpoint>
AZURE_OPENAI_API_KEY=<Your Azure API Key>
OPENAI_API_VERSION=<Your API Version>             # e.g., 2023-03-15-preview
AZURE_OPENAI_DEPLOYMENT_NAME=<Your Model Name>

📁 Folder Structure
bash
Copy
Edit
/backend
│
├── index.js                  # Entry point (must be in root for Lambda deployment)
│
└── src
    ├── config                # Configuration utilities
    ├── constant
    │   └── data.js           # Static data/constants
    ├── controllers           # Request handlers
    ├── routes                # Express route definitions
    └── service               # Azure/OpenAI service functions
💡 Features
🤖 Handles chat prompts and returns responses using Azure OpenAI.

🔐 Environment-secured API credentials.

⚡ Optimized for serverless deployment (AWS Lambda ready).

📦 Deployment Notes
Ensure index.js remains in the root directory for AWS Lambda compatibility.