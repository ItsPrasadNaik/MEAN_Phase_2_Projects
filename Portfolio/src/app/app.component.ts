import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { records } from './records';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  firstName: string = "";
  username: string = "";
  password: string = "";
  contactArray: Array<records> = [];


  msg: string = " ";
  loginPage: boolean = true;
  registerPage: boolean = false;
  portfolioPage: boolean = false;
  
  login(loginRef: NgForm)
  {
    let newLogin = loginRef.value;
    if (newLogin.username === this.username && newLogin.username != "" && newLogin.password === this.password)
    {
      this.page("3");
    }
    else
    {
      this.msg = "Credentials are not vaild, try again.";
    }
  }

  register(registerRef: NgForm)
  {
    let newRegister = registerRef.value;
    
    this.firstName = newRegister.firstName;
    this.username = newRegister.username;
    this.password = newRegister.password;

    this.page("2");
  }

  page(page: string) 
  {
    switch (page)
    {
      case "1":
        this.registerPage = true;
        this.loginPage = false;
        break;
      case "2":
        this.registerPage = false;
        this.loginPage = true;
        break;
      case "3":
        this.loginPage = false;
        this.portfolioPage = true;
        break;
    }
  }
  
  save(portfolioRef: NgForm)
  {
    let contact = portfolioRef.value;
    let newContact: records = new records(contact.name, contact.number);
    this.contactArray.push(newContact);
    portfolioRef.reset();
  }
}