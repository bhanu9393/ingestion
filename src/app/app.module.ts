import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { VisibilityComponent } from './visibility/visibility.component';
import { TradingComponent } from './trading/trading.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TempComponent } from './temp/temp.component';
import { ButtonRenderComponent } from './button-render/button-render.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSampleComponent } from './material-sample/material-sample.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    VisibilityComponent,
    TradingComponent,
    ShippingComponent,
    TempComponent,
    ButtonRenderComponent,
    MaterialSampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
