export class Proyecto {

  id?: number;
  nombreP: string;
  lenguage: string;
  descripcionP: string;
  linkP: string;

  constructor(nombreP: string, lenguage: string, descripcionP: string, linkP: string){
      this.nombreP = nombreP;
      this.descripcionP = descripcionP;
      this.lenguage = lenguage;
      this.linkP = linkP;
  }
}
