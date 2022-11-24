import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http:HttpClient) { }

  getUsers(){
     return this.http.get("http://localhost:3000/users")
  }

  getUserInfo(id:number){
    
  }

  addUser(emailId:string, firstName: string, lastName: string,zipCode: string){
   return  this.http.post("http://localhost:3000/create-user",{
      emailId : emailId,
      firstName:firstName,
      lastName: lastName,
      zipCode:zipCode
    })
  }

  updateUser(emailId:string, firstName: string, lastName: string,zipCode: string,id:number){
 
  }

  deleteUser(id:number){
 
  }

  
}
