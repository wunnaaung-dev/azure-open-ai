import { Router } from 'express';
import { chatController } from '../controllers/chat.controller.js';

const router = Router();

router.post('/chat', chatController)

router.post('/test', (req, res) => {
    res.send({reply: "Hello from test route"})
})

export default router;