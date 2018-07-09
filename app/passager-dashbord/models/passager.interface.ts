export interface Passager {
  id: number;
  fullname: string;
  checkIn: boolean;
  checkInDate: number | null;
  baggage: string;
}
