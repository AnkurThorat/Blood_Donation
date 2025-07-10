import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DonorInformationService } from '../service/donor-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {
  donor: any;
  donorRegi: any;
  RecipientRegi: any;
  registrationUsers: any[] = [];
  loginError: string = '';
  selectedRole: string = '';

  loginForm: FormGroup;
  registrationForm: FormGroup;
  recipientRegistationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private donorInformationService: DonorInformationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ['recipient', [Validators.required]],
    });

    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      blood_group: ['', Validators.required],
      phone_number: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      birth_date: ['', Validators.required],
      address: ['', Validators.required],
      last_donation_date: ['', Validators.required],
      blood_donate_in_ml: ['', [Validators.required, Validators.min(1)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postal_code: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      eligible_for_donation: ['', Validators.required],
      health_condition: ['', Validators.required],
    });

    this.recipientRegistationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      blood_group: ['', Validators.required],
      phone_number: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      birth_date: ['', Validators.required],
      address: ['', Validators.required],

      postal_code: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      quantity_needed: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginModel(model: any) {
    this.donor = this.modalService.open(model, { centered: true });
  }
  onSubmit() {}

  registrationDonorModel(model: any) {
    this.donorRegi = this.modalService.open(model, { centered: true });
  }

  registrationRecipientModel(model: any) {
    this.RecipientRegi = this.modalService.open(model, { centered: true });
  }

  onDonorRegistration() {
    this.donorInformationService
      .registerDonor(this.registrationForm.value)
      .subscribe({
        next: (val: any) => {
          this.registrationForm.reset();

          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
  onRecipientRegistration() {
    this.donorInformationService
      .registerRecipient(this.recipientRegistationForm.value)
      .subscribe({
        next: (val: any) => {
          this.recipientRegistationForm.reset();

          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.donorInformationService.loginDonor(this.loginForm.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', response.email);
        if (response.data == 'recipient') {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/donor']);
        }
      },
      error: (error: any) => {
        alert('Incorrect Email and Password');
        console.error('Login failed', error);
      },
    });
  }
}
