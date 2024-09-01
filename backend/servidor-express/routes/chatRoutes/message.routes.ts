import express, { Router } from 'express';
import { getAllMessages, handleChatMessage } from '../../controllers/chatController/ChatController';

const router: Router = express.Router();

export const messageRoutes = () => {
router.post('/message', async (req, res) => {
  const { content, userId } = req.body;

  try {
    const message = await handleChatMessage({ content, userId });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Error al manejar el mensaje' });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const messages = await getAllMessages(req, res);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes' });
  }
});





return router;
}

