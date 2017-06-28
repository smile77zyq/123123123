import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PinyinService } from './pinyin.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule
  ],
  providers: [PinyinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
