import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { ButtonComponent } from './components/button/button.component';
import { DropDownDDirective } from './components/drop-down/drop-down-d.directive';
import { DropDownItemDDirective } from './components/drop-down/drop-down-item-d.directive';
import { DropdownmenuComponent } from './components/drop-down/dropdownmenu/dropdownmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RateComponent } from './components/rate/rate.component';
@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    ButtonComponent,
    DropDownDDirective,
    DropDownItemDDirective,
    DropdownmenuComponent,
    PaginationComponent,
    RateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
