import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent{

  frameworkComponents: any;
  api: any;

  constructor()
  {
    this.frameworkComponents = {
     
    }
  }

   columnDefs = [
  { headerName: 'Make', field: 'make', editable: true },
  { headerName: 'Model', field: 'model', editable: true },
  { headerName: 'Price', field: 'price', editable: true },
  {
    headerName: 'Edit',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onEditButtonClick.bind(this),
    label: 'Edit'
    },
  },
  {
    headerName: 'Save',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onSaveButtonClick.bind(this),
    label: 'Save'
    },
  },
  {
    headerName: 'Delete',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onDeleteButtonClick.bind(this),
    label: 'Delete'
    },
  },
];

onEditButtonClick(params)
{
 this.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: 'make'
  });
}

onSaveButtonClick(params)
{
 this.api.stopEditing();
}

onDeleteButtonClick(params)
{
  debugger;
 this.api.updateRowData({remove: [params.data]});
}

onGridReady(params)
{
  this.api = params.api;
}


    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

}
