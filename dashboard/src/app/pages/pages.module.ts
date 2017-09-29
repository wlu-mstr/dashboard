import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { MaskComponent } from './mask/mask.component';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ PagesRoutingModule, CommonModule ],
  declarations: [
    LoginComponent,
    MaskComponent
  ]
})
export class PagesModule { }
