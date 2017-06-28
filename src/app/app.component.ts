import { Component, OnInit, OnDestroy } from '@angular/core';
import { PinyinService } from './pinyin.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app works!';
  constructor(private _pinyin: PinyinService) { };

  ngOnDestroy() {

  }
  ngOnInit() {

  }
}
