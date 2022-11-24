import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  userId! : number;
  emailId: string = "";
  firstName: string ="";
  lastName: string ="";
  zipCode: string ="";
  hasError: boolean = false;
  errorMessage:string = "";

  constructor(public activatedRoute: ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data:any)=>{
      console.log('data',data.params.id)
      this.userId = data.params.id;
      this.getUserInfo(this.userId);
    })
  
  }


  getUserInfo(id: number){
    this.userService.getUserInfo(id).subscribe({next:(response:any)=>{
      console.log('user info',response.data)
      this.emailId = response.data.emailId;
      this.firstName = response.data.firstName;
      this.lastName = response.data.lastName;
      this.zipCode = response.data.zipCode;

    },error:(error)=>{
      console.log('users info error',error)
    }});
  }

  updateUser(){
    if(this.validateUserInfo()){
    this.userService.updateUser(this.emailId,this.firstName,this.lastName,this.zipCode,this.userId).subscribe({next:(data)=>{
      console.log('user',data)
      this.hasError = false;
      window.alert('User Updated successfully');
      this.router.navigate(['/users'])
    },error:(error)=>{
      this.hasError = true;
      console.log('update users error',error)
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
