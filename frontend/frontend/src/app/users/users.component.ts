import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService,private router: Router) { }

  users:User[]=[]
  

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe({next:(data : any)=>{
      console.log('users',data)
      this.users = data;
    },error:(error)=>{
      console.log('users error',error)
    }});
  }

  deleteUser(id:number){
    
   
    
  }



}
