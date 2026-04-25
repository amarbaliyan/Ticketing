import { Publisher, Subjects, TicketCreatedEvent } from '@amarb143/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
