import express,{Request,Response} from 'express';
import { Ticket } from "../models/ticket";
import mongoose from 'mongoose';
import { NotFoundError } from '@amarb143/common';


const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  // ✅ Validate ID first
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new NotFoundError();
  }

  const ticket = await Ticket.findById(id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
