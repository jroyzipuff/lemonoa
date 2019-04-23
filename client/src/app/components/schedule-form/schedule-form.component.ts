import { ViewChild, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { StorageService } from '../../services/local-storage.service';
import { NgxAutoScroll } from 'ngx-auto-scroll';
@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  registerForm: FormGroup;
  submitted = false;
  chosenSlot;
  chosenHour;
  chosenEventId;
  savedInfo = {'fullName': '', 'email': '', 'phone': ''};
  selectedAttendees = 1;
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

  _slots = [];

  @Output()
  submitPayload = new EventEmitter();

  @Input() set slots(_slots: []) {
    this._slots = _slots;
  }

  get f() { return this.registerForm.controls; }
  constructor(
    private formBuilder: FormBuilder,
    private deviceDetectorService: DeviceDetectorService,
    private storageService: StorageService) {
    this.slideConfig = this.deviceDetectorService.isMobile() ? this.slideConfigMobile : this.slideConfigDesktop;
  }

  ngOnInit() {
    const info = this.storageService.getInfo() || this.savedInfo;
    this.registerForm = this.formBuilder.group({
        fullName: [info.fullName, [Validators.required, Validators.minLength(2)]],
        email: [info.email, [Validators.email, Validators.minLength(5)]],
        phone: [info.phone, [Validators.required, Validators.minLength(10)]]
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
    this.storageService.saveInfo(this.f['fullName'].value, this.f['email'].value, this.f['phone'].value);
    this.submitted = true;
}

public forceScrollDown(): void {
  this.ngxAutoScroll.forceScrollDown();
}
}


