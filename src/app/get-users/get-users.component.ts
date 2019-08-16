import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../usersapi.service';
import { Users } from '../users';
import { Router } from "@angular/router";

@Component({
  selector: "app-get-users",
  templateUrl: "./get-users.component.html",
  styleUrls: ["./get-users.component.css"]
})
export class GetUsersComponent implements OnInit {
  user: Users[];
  constructor(private obj: UsersapiService, private router: Router) {
     this.router.routeReuseStrategy.shouldReuseRoute = function() {
       return false;
     };
  }

  ngOnInit() {
    this.obj.getusers().subscribe((data: Users[]) => {
      this.user = data;
    });
  }

  deleteuser(id) {
    this.obj.deleteuser(id);
  }
}
