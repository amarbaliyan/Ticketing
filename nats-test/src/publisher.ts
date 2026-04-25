import {connect} from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();
 
const stan = connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});
 
stan.on('connect',async () => {
    console.log('Connected to publisher Nats');

    const publisher= new TicketCreatedPublisher(stan);
      try{await  publisher.publish({
            id: '1234',
            title: 'new book',
            price:230,
        });

      }catch(err){
        console.error(err);
      }

    // const data=JSON.stringify({
    //     id: '123',
    //     title: 'new book',
    //     price:230
    // })
    // stan.publish('ticket:created',data,()=>{
    //     console.log('event published')
    // })
});