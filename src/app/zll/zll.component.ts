import { Component, OnInit, OnDestroy } from '@angular/core';
import { asEnumerable as linq } from 'linq-es5';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'; 
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { ZllService } from './zll.service';
import { } from '../../shared';

@Component({
    selector: 's-zll',
    templateUrl: './zll.component.html',
    styleUrls: ['./zll.component.css']
})
export class ZllComponent implements OnInit, OnDestroy {
    searchText: string;
    searchTextStream: Subject<string> = new Subject<string>();

    constructor(private _zllService: ZllService) { }

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