# Angular - Workshop 3

## Pages

1. create-user

- create-user.component.ts

  ```
    hasError: boolean = false;
    userFormBuilder: FormGroup;

    constructor(private readonly formBuilder: FormBuilder,private userService: UserService) {
    this.userFormBuilder = this.formBuilder.group({
      emailId: formBuilder.control("", [Validators.required, Validators.email]),
      name: formBuilder.control("", [Validators.required]),
      phoneNumber: formBuilder.control("", [Validators.required]),
      companyName: formBuilder.control("", [Validators.required]),
      city: formBuilder.control("", [Validators.required]),
      street: formBuilder.control("", [Validators.required]),
      zipCode: formBuilder.control("", [Validators.required]),
      });
    }

      addUser() {
        this.hasError = false;
        if (this.userFormBuilder.valid) {
          this.userService.addUser({
            id: Math.floor(Math.random() * 10),
            name: this.userFormBuilder.controls['name'].value,
            emailId: this.userFormBuilder.controls['emailId'].value,
            phoneNumber: this.userFormBuilder.controls['phoneNumber'].value,
            companyName: this.userFormBuilder.controls['companyName'].value,
            street: this.userFormBuilder.controls['street'].value,
            city: this.userFormBuilder.controls['city'].value,
            zipCode: this.userFormBuilder.controls['zipCode'].value,
          });
        } else {
          this.hasError = true;
        }
      }

  ```

- create-user.component.html

  ```
  <div class="container">
  <form [formGroup]="userFormBuilder" (keydown.enter)="addUser()">
  <div class="form">
    <h2>Enter Details</h2>
    <div class="input-form">
      <label>Name </label>
      <input placeholder="Enter the name"  formControlName="name" />
    </div>
    <div class="input-form">
      <label>Email</label>
      <input placeholder="Enter the email id"  formControlName="emailId" />
    </div>
    <div class="input-form">
      <label>Phone</label>
      <input placeholder="Enter the phone number"  formControlName="phoneNumber" />
    </div>
    <div class="input-form">
      <label>Company</label>
      <input placeholder="Enter the company name" formControlName="companyName" />
    </div>
    <div class="input-form">
      <label>Street</label>
      <input placeholder="Enter the street" formControlName="street" />
    </div>
    <div class="input-form">
      <label>City</label>
      <input placeholder="Enter the city" formControlName="city" />
    </div>
    <div class="input-form">
      <label>Zipcode</label>
      <input placeholder="Enter the zipcode" formControlName="zipCode" />
    </div>
    <div class="error" *ngIf="hasError">
      <span>Please enter all the details</span>
    </div>
    <div class="form-btn">
      <button (click)="addUser()">Add User</button>
    </div>
  </div>
  </form>
  </div>


  ```

2. user-list

- user-list.component.ts

  ```
  constructor(public userService: UserService) {}

  ngOnInit() {
    if(!this.userService.userAleadyAdded())
    {

      this.userService.getUsers();
    }
  }

  deleteUser(event) {
    this.userService.deleteUser(event)
  }


  ```

- user-list.component.html

  ```
  <div class="container">
    <div class="header">
      <h2>User List</h2>
      <button routerLink="create-user">Create User</button>
    </div>

    <div class="user-card-container">
      <app-user-card
        *ngFor="let user of userService.users"
        [id]="user.id"
        [name]="user.name"
        [city]="user.city"
        [emailId]="user.emailId"
        (deleteUser)="deleteUser($event)"
      ></app-user-card>
    </div>
  </div>

  ```

3. user-card

- user-card.component.ts

  ```
  @Input() id: number;
  @Input() name: string;
  @Input() emailId: string;
  @Input() city: string;

  @Output() deleteUser = new EventEmitter<Number>();

  constructor(private userService: UserService) {}

  setUserId(id: number) {
    this.userService.userId = id;
  }

  deleteUserById(id) {
    this.deleteUser.emit(id);
  }

  ```

- user-card.component.html

  ```
  <div class="user-card">
    <label>{{ name }}</label> <br /><br/>
    <span>{{ emailId }}</span> <br /> <br>
    <span>{{ city }}</span> <br />
    <button class="detail-btn" routerLink="user-detail" (click)="setUserId(id)">
      DETAIL
    </button>
    <button class="delete-btn" (click)="deleteUserById(id)">DELETE</button>
  </div>


  ```

4. user-detail

- user-detail.component.ts

  ```
  userDetail: UserDetail = {
    id: this.userService.userId,
    name: '',
    city: '',
    companyName: '',
    emailId: '',
    phoneNumber: '',
    street: '',
    zipCode: '',
  };

  hasError: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.hasError = false;
    this.userService.getUserDetail(this.userService.userId).subscribe({
      next: (response: any) => {
        console.log('user detail response', response);
        this.userDetail.name = response.name;
        this.userDetail.emailId = response.email;
        this.userDetail.city = response.address.city;
        this.userDetail.companyName = response.company.name;
        this.userDetail.phoneNumber = response.phone;
        this.userDetail.zipCode = response.address.zipcode;
        this.userDetail.street = response.address.street;
      },
      error: (error) => {
        this.hasError = true;
        console.log('user detail error', error);
      },
    });
  }


  ```

- user-detail.component.html

  ```
  <div class="user-detail">
    <div *ngIf="!hasError" class="card">
      <h2>{{ userDetail.name }}</h2>
      <label>Emaild Id : {{ userDetail.emailId }}</label>
      <label> Phone Number : {{ userDetail.phone }}</label>
      <label>Company Name : {{ userDetail.companyName }}</label>
      <div>
        <h3>Address</h3>
        <label>{{ userDetail.street }}</label
        ><br />
        <label>{{ userDetail.city }}</label
        ><br />
        <label>{{ userDetail.zipCode }}</label
        ><br />
      </div>
    </div>
    <div *ngIf="hasError" class="error">
      <span>Unable to show the data</span>
    </div>
  </div>


  ```


