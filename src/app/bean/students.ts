export class Students {
  ID: string;
  firstName: string;
  lastName: string;
  doB: string;
  average: number;
  status: string;
  constructor(id: string, fn: string, ln: string, dB: string, av: number, st: string) {
    this.ID = id;
    this.firstName = fn;
    this.lastName = ln;
    this.doB = dB;
    this.average = av;
    this.status = st;
  }
}
// export class Students {
  
//   constructor(ID: string, firstName: string, lastName: string, doB: string, avarage: number, status: string) {

//   }
// }