import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Routes, Router, Route } from "@angular/router";
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-login',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
},)
export class AppComponent implements OnInit {
  
  register;
  login;
  userDetail;
  $route;
  about: String[];
  result = new Array();
  usname;

  constructor(private userService: UserService, private router: Router) { }

  show1 = true;
  ngOnInit(){
    this.register = {
      username: '',
      password: '',
      email: ''
    };
    this.login = {
      username: '',
      password: ''
    };
    this.userDetail = {
      username: '',
      about: ''
    };
    

  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        console.log(response);
        alert('User '+ this.register.username +' has been created');
      },
      error => console.log('error', error)
    );
  }
  
  
  onLogin() {
    
    this.userService.onLogin(this.login).subscribe(
      
      response => {
        
        console.log(response);
        console.log('Successful');
        
        alert('User '+ this.login.username +' has Logged in');
        
         this.router.navigateByUrl('home/home');
        // this.$route.templateUrl = 'home';

        this.show1 = false;
        
        // return hc.show;
        document.getElementById("divhome").style.display = "block";
        document.getElementById("user").textContent = this.login.username;

      //  alert(JSON.stringify(this.userDetails) );
      //  document.getElementById("about").textContent = JSON.stringify(this.userDetail);
        
        
      },
      error => {
        console.log('error', error);
        alert('Invalid User Name or Password');
    }
      

    );

    // this.userService.userDetails(this.userDetail).subscribe(
      
    //   data => {
        
    //     this.about = data as string [];
    //     for(var i in this.about){
    //       var obj=JSON.parse(JSON.stringify(this.about[i]));
    //       this.usname = this.login.username;
    //       console.log(this.login.username+"-Username");
    //      // obj.username);
    //      alert(this.login.username);
    //       this.result.push([data[i]]);
    //     }  
    //     //alert('user details');
    //     document.getElementById("about").textContent = JSON.stringify(Object.entries(this.result));
        
        
    //   },
  //     error => {
  //       console.log('error', error);
  //       alert('No data found');
  //   }
      

  //   );

   }

  
 

}
