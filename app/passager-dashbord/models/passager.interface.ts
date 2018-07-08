export interface Children {
  name: string;
  age: number;
}

export interface Passager {
  id: number;
  fullname: string;
  checkIn: boolean;
  checkInDate: number | null;
  children?: Array<Children> | null;
}
