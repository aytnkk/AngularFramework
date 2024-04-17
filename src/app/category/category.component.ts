import { Component } from '@angular/core';
import {Category } from '.category.ts';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
constructor(){}
title="Kategori Listesi"
categories : Category[]=[
{id:1, name:"elektronik"},
{id:2, name:"bilgisayar"},
{id:3, name:"mouse"},
{id:4, name:"yazici"},
{id:5, name:"pronter"}
]

}
