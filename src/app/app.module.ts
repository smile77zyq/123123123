import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.route';
import { PinyinService } from './pinyin.service';
import { SHttpService } from './s.http.service';

import { MjComponent } from './mj/mj.component';
import { MzComponent } from './mz/mz.component';
import { ZllComponent } from './zll/zll.component';
import { ZyqComponent } from './zyq/zyq.component';

import { MjService } from './mj/mj.service';
import { MzService } from './mz/mz.service';
import { ZllService } from './zll/zll.service';
import { ZyqService } from './zyq/zyq.service';

@NgModule({
  declarations: [
    AppComponent,

    MjComponent,
    MzComponent,
    ZllComponent,
    ZyqComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    DataTableModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    PinyinService,
    SHttpService,

    MjService,
    MzService,
    ZllService,
    ZyqService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
