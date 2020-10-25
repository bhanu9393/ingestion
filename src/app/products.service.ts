import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpParams} from '@angular/common/http'
import {Product} from './model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }

  getCtegory(){
    return this.httpclient.get("http://localhost:9090/ingestion/productcategorynames");
  }

  getSubCtegory(category){
    let param1=new HttpParams().set("category",category)
    return this.httpclient.get("http://localhost:9090/ingestion/"+category);
  }
  createProduct(resource){
    return this.httpclient.post("",resource)
  }

  getReport(){
    return this.httpclient.get("https://run.mocky.io/v3/ac83c3f6-7288-401a-850e-d9e2c7a3f95a");
   }
}
