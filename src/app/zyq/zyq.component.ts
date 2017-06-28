import { Component, OnInit, OnDestroy } from '@angular/core';
import { asEnumerable as linq } from 'linq-es5';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'; 
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { ZyqService } from './zyq.service';
import { } from '../../shared';

@Component({
    selector: 's-zyq',
    templateUrl: './zyq.component.html',
    styleUrls: ['./zyq.component.css']
})
export class ZyqComponent implements OnInit, OnDestroy {
    searchText: string;
    searchTextStream: Subject<string> = new Subject<string>();

    constructor(private _zyqService: ZyqService) { }

    ngOnInit(): void {
        this.searchTextStream.debounceTime(256).distinctUntilChanged()
            .subscribe(txt => {
                // TODO filter data
            });
    }

    searchChanged($event): void {
        this.searchTextStream.next(this.searchText);
    }

    ngOnDestroy(): void {
        this.searchTextStream.unsubscribe();
    }
}