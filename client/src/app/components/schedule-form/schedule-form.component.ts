import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  chosenEventId;
  selectedAttendees = 1;
  moment: moment.Moment;
  attendeeSlot = '../../../assets/attendee-ico.png';
  attendeeSelectedSlot = '../../../assets/attendee-ico-selected.png';
  slideConfig = {};
  slideConfigDesktop = {
    'slidesToShow': 7,
    'slidesToScroll': 7,
    'nextArrow': false,
    'prevArrow': false,
    'dots': true,
    'infinite': false
  };
  slideConfigMobile = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'nextArrow': false,
    'prevArrow': false,
    'dots': true,
    'infinite': false
  };

  @Output()
  submitPayload = new EventEmitter();

  @Input()
  slots = [];

  get f() { return this.registerForm.controls; }
  constructor(private formBuilder: FormBuilder, private deviceDetectorService: DeviceDetectorService) {
    this.slideConfig = this.deviceDetectorService.isMobile() ? this.slideConfigMobile : this.slideConfigDesktop;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.email, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid || !this.chosenSlot) {
      console.log('missing form fields');
      return;
    } else {
      this.submitPayload.emit({
      'id': this.chosenEventId,
      'email': this.f['email'].value,
      'fullName': this.f['fullName'].value,
      'phone': this.f['phone'].value,
      'attendees': this.selectedAttendees,
      'dateTime': [this.chosenSlot[0], this.chosenHour] }
      );
    }
    this.submitted = true;
}}
