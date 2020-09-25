import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // me = 'me';
  users: UserModel[] = [];
  // chatik = 'With micro';
  // isSmart = true;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(jsonUsers => {
      console.log(jsonUsers);
      this.users = jsonUsers;
    });
    }
  }

