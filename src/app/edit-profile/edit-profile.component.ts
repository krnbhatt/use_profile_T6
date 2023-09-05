import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: any;
  updatedUser: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private location: LocationStrategy
  ) {
    this.user = this.userService.getUser();
    history.pushState(null, "null", window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, "null", window.location.href);
    });
  }

  ngOnInit() {
    // Pre-fill the updatedUser object with the current user data
    this.updatedUser = { ...this.user };
  }

  onFormSubmit() {
    // Validate and update user data here

    // For this example, let's assume the user data is updated successfully
    this.userService.updateUser(this.updatedUser);
    this.router.navigate(['/']);
  }
}
