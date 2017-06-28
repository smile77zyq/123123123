import { PinyinService } from './pinyin.service';
import { SHttpService } from './s.http.service';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class AppService {
    constructor(private _http: SHttpService) { };

    
}

