# Angular 使用文档

## 1. 环境搭建

- [nodejs](https://nodejs.org/en/download/releases) 版本 6.10.1

``` bash

PS C:\Users\z> node -v  # 查看 nodejs 的版本
v6.10.1
PS C:\Users\z> npm -v   # 查看 npm 的版本。npm 主要用于安装项目的依赖包，如 primeng, linq-es5 等
3.10.10

```

- [python](https://www.python.org/downloads/) 版本 2.7.13 和 3.6.1  (node-sass的依赖)
- [typescript](http://www.typescriptlang.org/index.html#download-links) 版本 2.3.2 

``` bash
PS C:\Users\z> npm install -g typescript@2.3.2

PS C:\Users\z> tsc -v  # 查看 typescript 的版本
Version 2.3.2

```

- [angular-cli](https://github.com/angular/angular-cli) 版本 1.0.3

``` bash

PS C:\Users\z> npm install -g @angular/cli@1.0.3

PS C:\Users\qin_x> ng -v  # 查看 angular 的版本
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.0.3
node: 6.10.1
os: win32 x64

PS C:\Users\z> ng new angular-project  # 创建一个名叫 angular-project 的 angular 项目

```

## 2. 项目结构

- ✔ 表示开发时会使用到的文件或目录

``` bash

.
├── .angular-cli.json                   ✔ angular-cli 配置文件（添加js文件）
├── e2e                                 测试（不使用）
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── .editorconfig                       开发工具配置（保持默认）
├── .gitignore                          git 配置文件（不使用）
├── karma.conf.js                       测试（不使用）
├── package.json                        ✔ 依赖的包（如：npm install --save primeng）
├── protractor.conf.js                  测试配置文件（不使用）
├── README.md                           项目说明文档
├── src                                 ✔ 源码目录
│   ├── app                             ✔ 开发目录
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets                          ✔ 资源（存放图片、css等）
│   │   └── .gitkeep
│   ├── environments                    环境（开发还是部署）
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico                     网站 logo
│   ├── index.html                      主界面
│   ├── main.ts                         angular 启动时的入口（保持默认）
│   ├── polyfills.ts                    浏览器兼容
│   ├── styles.css                      ✔ 全局样式
│   ├── test.ts                         测试（不使用）
│   ├── tsconfig.app.json               tsc 编译器配置（保持默认）
│   ├── tsconfig.spec.json              tsc 编译器配置（保持默认）
│   └── typings.d.ts                    SystemJS 定义（保持默认）
├── tsconfig.json                       tsc 编译器配置（保持默认）
└── tslint.json                         typescript 语言静态分析工具的配置文件（保持默认）

```

## 3. TypeScript 语法

- 数据类型 boolean, number, string, [], enum, Date;  any, null, undefined

``` ts

display: boolean;

qty?: number;

title = `现在是${new Date().toString()}`;   // 模板字符串

arr: number[];

enum Color {
    Green,
    Read
}
c: Color.Green;

searchDate: Date;

sick: any // 可赋予任意值，不做数据类型约束

```

- 变量声明 let, const。**不要使用 var**

``` html

let-c="rowData"

```

``` ts

const index1 = array.indexOf(item);
const index2 = array.findIndex(f => f._id === id);

```

- 函数声明

``` ts

// 可选参数
showDialog(goods?: Goods) {

}

// 默认参数
searchGoodsByFilter(filter = 'Drug', index = 0, take = -1): Obserable<Goods> {

}

// goes 函数


```

- 类声明

``` ts

class Person {
    age: number;
    birthday?: Date;
}

class Employee extends Person {
    jobNo: string;
}

// 如果想让其他人也可以使用该类，则添加 export 关键字

export class Person {
    age: number;
    birthday?: Date;
}

export class Employee extends Person {
    jobNo: string;
}

import { Person, Employee } from '[file-path]';

```

- 访问修饰符

``` ts

private goods: Goods[];  // 私有，html 中不可绑定作为数据源
goodsFiltered: Goods[];  // 默认 public，html 中可绑定作为数据源

暂时未使用到 protected;

```

- 构造函数 `方法体不要写代码`

``` ts

constructor(private _pinyin: PinyinService) {
    // 注意：此处一行代码都不要写
    // 界面的初始加载数据都放在 ngOnInit() 方法中
    // 构造函数仅用作注入服务
}

```

- 模块导入

``` ts

import { ...Service } from './......service';
import { linq } from '../../shared';

```

## 4. Angular 数据绑定

``` ts

export class XComponent implements OnInit {

    displayName: string;

    goodsFiltered: Goods[];

    goods: Goods;

    ngOnInit() {
        this.displayName = 'HW';
        this.goodsFiltered = [];
        // this.goods = {} as Goods;
    }

    onClick($event) {
        console.log($event);
    }
}

```

- 插值绑定（数据源变化时，UI 显示的值同时变化）

``` html

<p>{{displayName}}</p>
<!--安全导航操作符-->
<p>{{goods?.displayName}}</p>

<!--field不要使用安全导航操作符-->
<p-column field="prescription.department" header="科室"></p-column>

<p-column>
    <ng-template let-item="rowData" pTemplate="field">
        <!--操作具体的对象时，才能使用安全导航操作符-->
        <span>{{item?.expiredDate | date: 'y-MM-dd'}}</span>
    </ng-template>
</p-column>

```

- 属性绑定

``` html

<p-dataTable [value]="goodsFiltered"> </p-dataTable>

```

- 事件绑定

``` html

<input type="button" (click)="onClick($event)" />

```

- 双向绑定

``` html

<!--此处必须保证 goods 不能为 null-->
<input type="text" [(ngModel)]="goods.displayName" />

```

- [管道](https://angular.cn/docs/ts/latest/api/common/index/DatePipe-pipe.html)（数据格式化）

``` html

<p-column header="销毁日期">
    <ng-template let-item="rowData" pTemplate="body">
        <span>{{item.createdTime | date: 'y-MM-dd'}}</span>
    </ng-template>
</p-column>

```

- 综合示例

``` html

<p-dropdown [options]="customers" [(ngModel)]="customerSelected" (onChange)="customerChanged()"></p-dropdown>

```

- *ngIf（控制 DOM 的显示或隐藏）

``` html

<p-checkbox [(ngModel)]="isKit" [binary]="true" label="是否是套装"></p-checkbox>
<input *ngIf="isKit" type="text" placeholder="输入套装名" [(ngModel)]="kitName" />

```

- *ngFor（创建一组 DOM）

``` html

<p-radioButton *ngFor="let cabinet of cabinets"
    [label]="cabinet.displayText" [(ngModel)]="cabinetSelected" (onClick)="cabinetChanged()">
</p-radioButton>

```

## 5. 组件（test-demo）

- test-demo.component.css
- test-demo.component.html
- test-demo.component.ts
- test-demo.service.ts

``` ts

import {
    Injectable, SHttpService, Observable, URLSearchParams,
} from '../../shared';

@Injectable()
export class TestDemoService {
    constructor(private http: SHttpService) { }

    modifyRole(role: Role): Observable<string> {
        const url = '/api/ng/modify-role';
        const params = new URLSearchParams();
        return this.http.put(url, role, params);
    }
}

```

### component.ts 命名规则

1. DropDown

``` ts

customers: SelectItem<CustomerCore>[];
customerSelected: CustomerCore;

customerChanged() {

}

```

2. Table 新增或修改

``` ts

displayModifyGoodsDialog: boolean;
goodsChecked: Goods;

showModifyGoodsDialog(goods?: Goods) {
    this.goodsChecked = goods == null ? {} as Goods : JSON.parse(JSON.stringify(goods));
    this.displayModifyDialog = true;
}

doModifyGoods() {
    // 提交到服务端，然后更新本地数据以及UI显示
    this._service.modifyXXX(this.goodsChecked)
        .subscribe(id => {
            if(id != null) {
                this.goodsChecked._id = id;
                const index = someArray.findIndex(f => f._id === id);
                if(index < 0){
                    this.someArray = [... this.someArray, this.goodsChecked];
                } else {
                    this.someArray[index] = this.goodsChecked;
                    this.someArray = [... this.someArray];
                }
            }
            // 服务端如果有错，页面不关闭
            this.displayModifyDialog = id == null;
        });
}

```

3. Table 删除

``` ts

confirmDeleteGoods(goods: Goods) {
    this._confirmService.confirm({
        header: `是否删除药品 ${goods.displayName} ？`,
        message: `药品删除确认`,
        accept: () => {
            this._service.removeXXX(goods._id)
                .subscribe(b => {
                    if (b) {
                        this.someArray = this.someArray.filter(f => f._id !== goods._id);
                    }
                });
        }
    });
}

```

4. 数据过滤

``` ts

searchText: string;
searchTextStream: Subject<string> = new Subject<string>();

ngOnInit() {
    this.searchTextStream.debounceTime(127).distinctUntilChanged()
        .subscribe(text => {
            text = (text || '').toLowerCase();
            this.someArrayFiltered = text.length > 0
                ? this.someArray.filter(f => `${f.pinyin} ${f.pinyinFull} ${f.displayName}`.toLowerCase().indexOf(text)>=0)
                : this.someArray;
        });
}

searchChanged($event) {
    this.searchTextStream.next(this.searchText);
}

ngOnDestroy() {
    this.searchTextStream.unsubscribe();
}

```

``` html

<input type="text" class="form-control" [(ngModel)]="searchText" (keyup)="searchChanged($event)" (change)="searchChanged($event)" />

```