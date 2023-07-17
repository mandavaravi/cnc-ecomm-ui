export class Product{
  name:string;
  category:string;
  stock:number;
  price:number;
  sales:number;
}

export class NameBool{
  name:string;
  value:boolean;
}
export var categoryList:NameBool[]=[
  { name: 'Chocolates', value:false},
  { name: 'Toothpaste',  value:false},
  { name: 'Chips',  value:false},
  { name: 'Beverages',  value:false}
  ];

