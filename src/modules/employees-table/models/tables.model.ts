export interface Country {
    [key: string]: string | number;
    id: number;
    name: string;
    flag: string;
    area: number;
    population: number;
}

export interface Employees {
    id: number | null,
    code:string,
    name: string,
    fistName: string,
    email:string,
    tel1:string,
    tel2:string
  }