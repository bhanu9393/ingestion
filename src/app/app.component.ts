import { Component } from '@angular/core';
import {ProductsService} from './products.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplay=false;
  public CategoryList:any=[];
  public ProducSubtCtegoryList:any=[];

  constructor(private productService:ProductsService){
    this.productService.getCtegory()
    .subscribe(data =>this.CategoryList=data)
  }

  onChangeCategoryTest(value:String){
   this.productService.getSubCtegory(value)
   .subscribe(data =>this.ProducSubtCtegoryList=data) 
    console.log(this.ProducSubtCtegoryList)
  
  }
 
  onChangeSubCategoryTest(value:String){
    console.log(value+"Of SubCategory");
    this.isDisplay=true;
  }
  
}
