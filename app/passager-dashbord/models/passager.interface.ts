import { Baggage } from './baggage.interface';
export interface Passager {
  id: number;
  fullname: string;
  checkIn: boolean;
  checkInDate?: number;
  baggage: Baggage;
}
