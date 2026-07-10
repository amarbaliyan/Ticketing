import { OrderCancelledEvent, Publisher, Subjects } from "@amarb143/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject:Subjects.OrderCancelled=Subjects.OrderCancelled;
}