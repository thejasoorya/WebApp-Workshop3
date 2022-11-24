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
    
  }

  updateUser(){
 
  }

  validateUserInfo():boolean{
    if(this.emailId === '' || this.firstName === '' || this.lastName === '' || this.zipCode=== '')
    return false;
    return true;
  }

}
