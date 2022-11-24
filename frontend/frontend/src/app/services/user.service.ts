import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get("http://localhost:3000/users")
  }

  getUserInfo(id:number){
    return this.http.get("http://localhost:3000/user/"+id)
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
   return this.http.post("http://localhost:3000/update-user",{
      id:id,
      emailId : emailId,
      firstName:firstName,
      lastName: lastName,
      zipCode:zipCode
    })
  }

  deleteUser(id:number){
   return this.http.post("http://localhost:3000/delete-user",    
    {
      "id":id
    })
  }

  
}
