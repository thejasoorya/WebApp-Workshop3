# Angular - Workshop 3

## Services

1. Create a service _user_

   ```
     ng generate service services/user
   ```
2. Checking already user added or not 
    ```
      userAleadyAdded(): boolean {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        return this.users.length == 0 ? false : true;
      }
    ```
3. Getting _user list_

   ```
    getUsers(): void {
      this.users = [];
      this.http.get(this.baseUrl).subscribe({
        next: (response: any) => {
          let tempUser = [];
          response.forEach((element) => {
            let user: User = {
              id: element.id,
              name: element.name,
              city: element.address.city,
              emailId: element.email,
            };
            tempUser.push(user)
          });

          localStorage.setItem("users",JSON.stringify(tempUser));
          this.users =  JSON.parse(localStorage.getItem("users")) || [];
        },
        error: (err) => {
          console.log('error', err);
        },
      });
    }
   ```

4. Getting _user detail_

   ```
      getUserDetail(id: number): Observable<any> {
        return this.http.get(this.baseUrl + '/' + id);
      }
   ```

5. adding _user detail_

   ```
    addUser(user: UserDetail): void {
      this.http
        .post(this.baseUrl, {
          user: user,
        })
        .subscribe({
          next: (response) => {
            this.users = JSON.parse(localStorage.getItem('users')) || [];
            this.users.push(user);
            localStorage.setItem('users', JSON.stringify(this.users));
            alert('User added successfully');
            this.router.navigateByUrl('/');
          },
          error: (error) => {
            console.log('add user error', error);
          },
        });
    }
   ```

6. deleting _user detail_

   ```
    deleteUser(id: number): void {
      this.http.delete(this.baseUrl + '/' + id).subscribe({
        next: (response) => {
          this.users = JSON.parse(localStorage.getItem('users')) || [];
          this.users = this.users.filter((user) => user['id'] != id);
          localStorage.setItem('users', JSON.stringify(this.users));
          this.users = JSON.parse(localStorage.getItem('users')) || [];
          alert('User delete successfully');
        },
        error: (error) => {
          console.log('delete user error', error);
        },
      });
   }
   ```

## Guards

1. Create a guard _auth_

   ```
     ng generate guard guard/user
   ```

2. Add the guard to _create-user_ route in _app-routing.module.ts_
   ```
    {
        path: 'create-user',
        component: CreateUserComponent,
        canActivate: [AuthGuard],
    }
   ```

## Interceptors

1. Create an Interceptors _log_

   ```
     ng generate interceptor interceptors/log
   ```

2. Log some data
   ```
      intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
      ): Observable<HttpEvent<unknown>> {
        const requestCopy = request.clone();
        console.log('interceptor is called');
        return next.handle(requestCopy);
      }
   ```
