# Angular - Workshop 3

## Git 
```
 git pull upstream main
 git push origin main
 git checkout -b exercise
```

## Command Line Tools

1.  Creating angular project
    ```
      ng new project-name
    ```
2.  Running angular project
    ```
      ng serve
    ```
3.  Creating component
    ```
      ng generate component component-name
    ```

## Component Life Cycle

1.  constructor
    ```
      constructor() {
        console.log('Constructor called');
      }
    ```
2.  ngOnChanges
    ```
      ngOnChanges() {
        console.log('on changes called');
      }
    ```
3.  ngOnInit
    ```
      ngOnInit() {
        console.log('on init called');
      }
    ```
4.  ngOnDestroy()
    ```
      ngOnDestroy() {
        console.log('on destroy called');
      }
    ```

## Structural Directives

1.  \*ngIf

    app.component.ts

    ```
      showButton: boolean = true;
    ```

    app.component.html

    ```
      <button *ngIf="showButton">CLICK</button>
    ```

2.  \*ngFor

    app.component.ts

    ```
      names = ['Arun', 'Mark', 'Smith', 'Jack'];
    ```

    app.component.html

    ```
    <h2 *ngFor="let item of names">

      {{ item }}
    </h2>
    ```

## Sharing data between child and parent components

### Parent to Child

1. In parent

   app.component.ts

   ```
     title : string = "Hello from parent"
   ```

   app.component.html

   ```
     <app-child  [message]="title"></app-child>
   ```

2. In child

   child.component.ts

   ```
     @Input() message: string;
   ```

   child.component.html

   ```
     <span>{{message}}</span>
   ```

### Child to Parent

1. In parent

   app.component.ts

   ```
     childButtonClick(){
        console.log("Hello from child")
     }
   ```

   app.component.html

   ```
     <app-child  [message]="title" (buttonClick)="childButtonClick()"></app-child>
   ```

2. In child

   child.component.ts

   ```
     @Output() buttonClick = new EventEmitter<>();

     myButtonClick(){
      this.buttonClick.emit();
     }
   ```

   child.component.html

   ```
     <button (click)="myButtonClick()">Click me</button>
   ```

## Routing

1. Create a component _header_

   ```
     ng generate component header
   ```

2. Use _header_ and _router-outlet_ in app.component.html

   ```
     <app-header></app-header>
     <router-outlet></router-outlet>
   ```

3. Create another component _about-us_

   ```
    ng generate component about-us
   ```

4. Add a route in _app-routing.module.ts_
   ```
    const routes: Routes = [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      }
    ]
   ```
5. add link in _header-component.html_

   ```
      <label routerLink="/">Home</label>
      <label routerLink="/about-us">About Us</label>
   ```
