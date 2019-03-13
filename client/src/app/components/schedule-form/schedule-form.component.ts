import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  chosenHour;
  selectedAttendees = 1;
  moment: moment.Moment;
  attendeeSlot = '../../../assets/attendee-ico.png';
  attendeeSelectedSlot = '../../../assets/attendee-ico-selected.png';
  slideConfig = {
    'slidesToShow': 7,
    'slidesToScroll': 7,
    'nextArrow': '<div class="nav-btn next-slide"></div>',
    'prevArrow': '<div class="nav-btn prev-slide"></div>',
    'dots': true,
    'infinite': false
  };

  @Output()
  submitPayload = new EventEmitter();

  @Input()
  slots = [];

  get f() { return this.registerForm.controls; }
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.email, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid || !this.chosenSlot) {
      console.log('missing form fields');
      return;
    } else {
      this.submitPayload.emit({
      'id': this.chosenSlot.id,
      'email': this.f['email'].value,
      'fullName': this.f['fullName'].value,
      'phone': this.f['phone'].value,
      'attendees': this.selectedAttendees});
    }
}}
