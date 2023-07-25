import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

import { OrderByPipe3 } from './pipes/orderby2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe3

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
