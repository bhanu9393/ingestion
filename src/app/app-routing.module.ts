import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialSampleComponent } from './material-sample/material-sample.component';
import { SampleComponent } from './sample/sample.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TempComponent } from './temp/temp.component';
import { TradingComponent } from './trading/trading.component';
import { VisibilityComponent } from './visibility/visibility.component';

const routes: Routes = [
{path:'sample',component:SampleComponent},
{path:'visibility',component:VisibilityComponent},
{path:'trade',component:TradingComponent},
{path:'shipping',component:ShippingComponent},
{path:'temp',component:TempComponent},
{path:'material',component:MaterialSampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
