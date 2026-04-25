import { Publisher, Subjects, TicketUpdatedEvent } from '@amarb143/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
