import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event) {
       event.preventDefault();
       const target = event.target ;
       const username = target.querySelector('#username').value ;
       const password = target.querySelector('#password').value ;
       console.log('/src/app/login.comp.ts-event=', event);
      // console.log('/src/app/login.comp.ts-user/pass1=', username, password);
       this.Auth.getUserDetails(username, password).subscribe(data => {
        if (data.success) {  console.log('/src/app/login.comp.ts-auth success data=', data);
         // this.router.navigate(['admin'])
         // this.Auth.setLoggedIn(true)
        } else { console.log('/src/app/login.comp.ts-auth not success data=', data);
          window.alert(data.message) ;
        }
      }) ;
       console.log('/src/app/login.comp.ts-user/pass=', username, password);
  }
}
