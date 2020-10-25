import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  
  constructor(private http:HttpClient) { }
  columnDe = [
    { field: 'value' },
    { field: 'priority' },
    { field: 'Order' } ,
    { field: 'defaultValue' } 
];
defaultColDef = {
  flex: 1,
  minWidth: 110,
  editable: true,
  resizable: true,
};
d=[]
rows=[]

rowData :any;
Entries=[]
data2:any;

onCellValueChanged(event) {
  console.log('data after changes is: ', event.data);
}

  ngOnInit(): void {
    this.http.get('https://run.mocky.io/v3/04285872-cde0-4a36-80a9-070d99978c2c').subscribe(data2=>{
   this.data2=data2;
    console.log("OPPPP"+this.rowData);
    this.data2.forEach((values)=>{
      values.attributes.forEach(element => {
        this.Entries.push(element)
      });
    })

   this.d=Object.values(this.Entries[2])
   this.d.forEach((item)=>{
     item.forEach((i)=>{
      var Obj;
      Obj={
       value: i.value,
       priority:i.priority,
       Order: i.Order,
       defaultValue: i.defaultValue
      }
      this.rows.push(Obj)
     })
   });
  
   this.rowData=this.rows

   
    })
  }




  

 
}
