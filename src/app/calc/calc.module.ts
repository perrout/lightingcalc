import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalcComponent } from './calc.component';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [CalcComponent],
  exports: [CalcComponent]
})
export class CalcModule { }
