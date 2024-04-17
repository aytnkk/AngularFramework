import { Component, OnInit} from '@angular/core';
import {Product } from './Product' ;
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
constructor(){ }
title = "Urun Listesi"
products : Product[]= [
{id:1,name : 'Laptop' , price:2500, categoryId:1, description: "Asus ZenBook", imageUrl:""},
{id:1,name : 'Mouse' , price:25, categoryId:2, description: "A4 Tech", imageUrl:""},
{id:1,name : 'Laptop' , price:2500, categoryId:1, description: "Asus ZenBook", imageUrl:""},
{id:1,name : 'Mouse' , price:25, categoryId:2, description: "A4 Tech", imageUrl:""},
{id:1,name : 'Laptop' , price:2500, categoryId:1, description: "Asus ZenBook", imageUrl:""},
{id:1,name : 'Mouse' , price:25, categoryId:2, description: "A4 Tech", imageUrl:""}
]
ngOnInit(){
}
}
