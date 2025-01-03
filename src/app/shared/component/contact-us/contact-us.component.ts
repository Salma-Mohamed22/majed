import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      msg_title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;  // Set to true after form submission attempt

    // Check if the form is invalid
    if (this.contactForm.invalid) {
      // Loop through all controls and log the names of the invalid fields
      Object.keys(this.contactForm.controls).forEach(controlName => {
        const control = this.contactForm.get(controlName);
        if (control?.invalid) {
          console.log(`${controlName} is invalid`);  // Log the invalid field name
        }
      });
      return;  // Prevent form submission if invalid
    }

    // If all fields are valid, log the form data
    console.log('Form submitted successfully', this.contactForm.value);
  }

  
}
