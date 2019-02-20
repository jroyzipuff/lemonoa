import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  chosenSlot;
  moment: moment.Moment;

  @Output()
  submitPayload = new EventEmitter();

  @Input()
  slots = [];

  get f() { return this.registerForm.controls; }
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // sessions[0].setValue(true); // Set the first checkbox to true (checked)
    this.registerForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  parseDateMonth(date) {
    return moment(date).format('DD/MM HH:mm');
  }

  parseHour(date) {
    return moment(date).format('HH:mm');
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid || !this.chosenSlot) {
      return;
    } else {
      this.submitPayload.emit({
      'id': this.chosenSlot.id,
      'email': this.f['email'].value,
      'fullName': this.f['fullName'].value,
      'phone': this.f['phone'].value });
    }
}}
