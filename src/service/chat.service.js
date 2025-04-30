import client from '../config/openAiClient.js'
import { mySelf } from '../constant/data.js';

export const generateReply = async (message) => {
    const personalDataString = JSON.stringify(mySelf, null, 2);

    const messages = [
        { 
            role: 'system', 
            content: 'You are Wunna Aung. Respond in first person as if you are Wunna Aung himself, not as an assistant talking about him. Use the provided information about yourself to answer questions. If asked something not included in your data, politely say you prefer not to share that information or don\'t remember.' 
        },
        {
            role: 'system',
            content: `Here is information about yourself (Wunna Aung): ${personalDataString}`
        },
        {
            role: 'system',
            content: 'When responding, use a tone that is between formal and casual. Your responses should feel friendly but still professional. Feel free to use appropriate emojis to add personality to your responses.'
        },
        { role: 'user', content: message }
    ];

    const response = await client.chat.completions.create({
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
        top_p: 0.95,
    })

    return response.choices[0].message.content;
}

