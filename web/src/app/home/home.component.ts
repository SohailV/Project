import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { UserService } from '../user.service';
import { Routes, Router, Route } from "@angular/router";
// import { alasql } from "alasql";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userDetail;
  show = true;
  about: String[];
  result = new Array();
  usname;
  constructor(private userService: UserService, private router: Router) {  }
  // showin1(){
  //   console.log("show msg");
    
    
  //   console.log(this.show);
    
  //   }
  ngOnInit() {
    console.log('i am in home component');
      this.userDetails();
      //this.userDetails();
   // document.getElementById("about").textContent = "{{ hi }}";
    // this.userDetail = {
    //   username: '',
    //   about: ''
    // };
    // this.userDetails();
    
  }
  
  
  userDetails(){
    console.log("userdetails");
    
    this.userService.userDetails(this.userDetail).subscribe(
      
      data => {
        
        this.about = data as string [];
        for(var i in this.about){
          
          
          this.result.push([data[i]]);
        }  
         //var res = alasql('SELECT about FROM ? WHERE usename = 1',[this.result]);
        document.getElementById("about").textContent = JSON.stringify(Object.entries(this.result));
        
        
       },
      error => {
        console.log('error', error);
        alert('No data found');
    }
      

     );

  }
  // userDetails() {
    
  //   this.userService.userDetails(this.userDetail).subscribe(
      
  //     response => {
        
  //       // console.log(response);
  //       console.log('Successful');
        
        
        
  //       // this.router.navigateByUrl('home');
  //       // this.$route.templateUrl = 'home';

        
        
  //       // return hc.show;
  //       // document.getElementById("divhome").style.display = "block";
  //       document.getElementById("about").textContent = "hi";
        
        
        
        
  //     },
  //     error => {
  //       console.log('error', error);
        
  //   }
      

  //   );

  // }
  
  

}
