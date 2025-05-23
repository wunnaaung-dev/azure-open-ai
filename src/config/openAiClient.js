import { AzureOpenAI } from "openai"

import { config } from "dotenv"
config()

const endpoint = process.env.AZURE_OPENAI_ENDPOINT
const apiKey = process.env.AZURE_OPENAI_API_KEY
const apiVersion = process.env.OPENAI_API_VERSION
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME


const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment,
})

export default client