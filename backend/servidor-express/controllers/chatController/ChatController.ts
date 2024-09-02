import { createMessage, getMessages, getUserById } from "../../models/chatModel/ChatModel";
import { Request, Response } from 'express';

export const handleChatMessage = async (data: { content: string; userId: number }) => {
  const { content, userId } = data;

  try {
    await createMessage(content, userId);

    const user = await getUserById(userId);
    if (!user) {
      return { content, userId, username: 'Desconocido' }; 
    }

    return { content, userId, username: user.username };
  } catch (error) {
    console.error('Error al manejar el mensaje: ', error);
    throw new Error('Error al manejar el mensaje');
  }
};


export const getAllMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await getMessages();
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error al obtener los mensajes: ', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
