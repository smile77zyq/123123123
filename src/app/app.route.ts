import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MjComponent } from './mj/mj.component';
import { MzComponent } from './mz/mz.component';
import { ZllComponent } from './zll/zll.component';
import { ZyqComponent } from './zyq/zyq.component';

const routes: Routes = [
    { path: 'mj', component: MjComponent },
    { path: 'mz', component: MzComponent },
    { path: 'zll', component: ZllComponent },
    { path: 'zyq', component: ZyqComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
