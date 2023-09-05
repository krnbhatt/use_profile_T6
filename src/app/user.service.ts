// src/app/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = {
    name: 'Karan Bhatt',
    email: 'karan.hyperlink@gmail.com',
    number: '+917383072552',
    role: 'Web Developer',
    profilePicture: 'assets/profile.jpg'
  };

  getUser() {
    return { ...this.user };
  }

  updateUser(updatedUser: any) {
    this.user = { ...this.user, ...updatedUser };
  }
}