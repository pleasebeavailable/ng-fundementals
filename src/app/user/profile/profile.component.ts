import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      [
        Validators.required,
      Validators.pattern('[a-zA-Z].*')]
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(profileForm) {
    this.authService.updateCurrentUser(
      profileForm.firstName,
      profileForm.lastName);
    this.router.navigate(['/events']);
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
}

