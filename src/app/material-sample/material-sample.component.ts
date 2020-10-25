import { Component, OnInit } from '@angular/core';
import {Visible} from '../model/visible';
import {ProductsService} from '../products.service';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: Visible[] = [
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample2',priority: 2,  order: 4, defaultValue: 'Default2'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
  {value: 'sample1',priority: 1, order: 1, defaultValue: 'Default1'},
];

@Component({
  selector: 'app-material-sample',
  templateUrl: './material-sample.component.html',
  styleUrls: ['./material-sample.component.css']
})
export class MaterialSampleComponent implements OnInit {
  ;

  constructor(private service:ProductsService) {
    
   }
  ELEMENT_DATA: Visible[];
  displayedColumns:String[]=['value','priority','order','defaultValue']
  dataSource:Visible[]
    
  ngOnInit(): void {
    this.dataSource=ELEMENT_DATA
    
  }
   
}
