import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaIteratorDirective } from './iterator.directive';
import { PaStructureDirective } from './Structure.directive';
import { PaModel } from './twoWay.directive';
import { PaAttrDirective } from './attr.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  // providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
