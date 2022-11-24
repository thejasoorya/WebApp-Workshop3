import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
  path:'users',
  component:UsersComponent
},
{
  path:'create-user',
  component: CreateUserComponent
},
{
  path:'update-user/:id',
  component:UpdateUserComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
