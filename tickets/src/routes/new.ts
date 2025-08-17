    import express, { Request, Response } from 'express';
    import { app } from '../app';
    import { body } from 'express-validator';
    import { requireAuth, validateRequest } from '@amarb143/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.post('/api/tickets', requireAuth,[
  body('title').not().isEmpty().withMessage('Title is required'),
  body('price').isFloat({gt:0}).withMessage('price must be greater than zero'),

],
  
  validateRequest,
async (req: Request, res: Response) => {
  const{title,price}=req.body;
  
  const ticket=Ticket.build({
    title,
    price,
    userId:req.currentUser!.id,
  });
  await ticket.save();


  res.sendStatus(201);
});

export { router as CreateTicketRouter };

