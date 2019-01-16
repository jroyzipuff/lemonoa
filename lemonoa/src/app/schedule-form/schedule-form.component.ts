import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  sessions = [
    { id: 100, name: 'Tuesday 18:00' },
    { id: 200, name: 'Tuesday 19:00' },
    { id: 300, name: 'Wednesday: 17:00' },
    { id: 400, name: 'Thursday 17:00' }
  ];


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const sessions = this.sessions.map(s => new FormControl(false));
    sessions[0].setValue(true); // Set the first checkbox to true (checked)
      this.registerForm = this.formBuilder.group({
          fullName: ['', Validators.required, Validators.minLength(2)],
          email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
          phone: ['', [Validators.required, Validators.minLength(10)]],
          availableSessions: new FormArray(sessions)
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
}}
