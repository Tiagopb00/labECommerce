import {Product} from './Product'


interface quantity_purchase {
    quantity: number;
}

export class Purchase extends Product implements quantity_purchase{
    public quantity: number = 1
  
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
     ) {
       super(name, description, price)
    }
  
    public getTotal(price:number, quantity:number): number {
     const total = price * quantity
     return total
   }
   
  }