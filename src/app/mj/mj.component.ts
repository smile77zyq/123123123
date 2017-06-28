import { Component, OnInit, OnDestroy } from '@angular/core';
import { asEnumerable as linq } from 'linq-es5';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'; 
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { MjService } from './mj.service';
import { } from '../../shared';

@Component({
    selector: 's-mj',
    templateUrl: './mj.component.html',
    styleUrls: ['./mj.component.css']
})
export class MjComponent implements OnInit, OnDestroy {
    searchText: string;
    searchTextStream: Subject<string> = new Subject<string>();

    constructor(private _mjService: MjService) { }

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