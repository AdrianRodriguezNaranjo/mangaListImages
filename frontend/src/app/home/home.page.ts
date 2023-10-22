
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IdtransportService } from '../services/idtransport.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any = []

  constructor(private userService:UserService,private idtransportService:IdtransportService,private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    });
  }

  gotoMyMangas(userId: any) {
    this.idtransportService.setUserId(userId);
    this.router.navigateByUrl("/my-mangas");
  }

  gotoCreateUser() {
    this.router.navigateByUrl("/create-user");
  }
}
