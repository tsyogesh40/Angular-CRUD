import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { UsersapiService } from '../usersapi.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  userForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute, private api: UsersapiService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.edituser(params.id).subscribe(res => {
        this.user = res;
      });
    });
  }
  createForm() {
    this.userForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  updateuser(id , name, email, phone, address, image) {
    this.api.updateuser(id, name, email, phone, address, image);
    this.router.navigate(['/getusers']);
  }
}
