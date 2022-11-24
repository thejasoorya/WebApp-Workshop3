import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  errorMessage:string = "";
  emailId: string = "";
  firstName: string ="";
  lastName: string ="";
  zipCode: string ="";

  hasError: boolean = false;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {

  }

  addUser(){
    if(this.validateUserInfo())
    {
      this.userService.addUser(this.emailId,this.firstName,this.lastName,this.zipCode).subscribe({next:(data)=>{
        console.log('user',data)
        this.hasError = false;
        window.alert('User added successfully');
        this.router.navigate(["/users"])
        
      },error:(error)=>{
        console.log(error);
        if(error.error.message === 'Duplicate email id'){
          this.hasError = true;
          this.errorMessage = "Email already exist"
        }
        
      }});;
    }
    else {
      
      this.errorMessage = 'Please enter all the details'
      this.hasError = true;
    }
  }

  validateUserInfo():boolean{
    if(this.emailId === '' || this.firstName === '' || this.lastName === '' || this.zipCode=== '')
    return false;
    return true;
  }

}
