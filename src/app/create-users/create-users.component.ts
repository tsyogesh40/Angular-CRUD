import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UsersapiService } from '../usersapi.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private api: UsersapiService) {
        this.createform();
  }

  ngOnInit() {
  }

  createform() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      image: ['', Validators.required]
    });
  }


  createuser(name, email, phone , address, image){
    this.api.createuser(name, email, phone, address, image);
  }
}
