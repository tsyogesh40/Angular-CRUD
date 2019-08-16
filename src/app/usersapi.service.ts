import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root"
})
export class UsersapiService {
  url = "https://young-thicket-95533.herokuapp.com";

  constructor(private http: HttpClient, private router: Router) {}

  // To get users
  getusers() {
    return this.http.get(this.url + "/users");
  }

  // To Create Users
  createuser(name, email, phone, address, image) {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      image: image
    };

    //
    this.http.post(this.url + "/users", obj).subscribe(data => {
      console.log("user create successlly");
    });
  }

  // to get individual users
  edituser(id) {
    return this.http.get(this.url + "/users/" + id);
  }

  updateuser(id, name, email, phone, address, image) {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      image: image
    };
    this.http.post(this.url + "/users/" + id, obj).subscribe(data => {
      console.log("user updated");
    });
  }

  deleteuser(id) {
    this.http.delete(this.url + "/users/" + id).subscribe(data => {
      console.log(data);
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    });
  }
}
