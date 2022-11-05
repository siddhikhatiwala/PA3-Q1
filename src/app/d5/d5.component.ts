import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-d5',
  templateUrl: './d5.component.html',
  styleUrls: ['./d5.component.css']
})
export class D5Component implements OnInit {
  userForm: FormGroup;
  user: any;
  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      sem: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      phno: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.user = this.userForm.value;
  }

}
