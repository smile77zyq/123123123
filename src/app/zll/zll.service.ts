import { Injectable, } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {SHttpService} from '../s.http.service';

@Injectable()
export class ZllService {
    constructor(private http: SHttpService) { }

}
