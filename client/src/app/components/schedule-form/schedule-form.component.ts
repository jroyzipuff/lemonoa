import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  @Output()
  submitPayload = new EventEmitter();

  @Input()
  slots = [];

  // sessions = [
  //   { id: 354252454, name: 'Tuesday 18:00' },
  //   { id: 425245245, name: 'Tuesday 19:00' },
  //   { id: 134134134, name: 'Wednesday: 17:00' },
  //   { id: 234242344, name: 'Thursday 17:00' }];



  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const slotsForSelection = this.slots.map(s => new FormControl(false));
    // sessions[0].setValue(true); // Set the first checkbox to true (checked)
      this.registerForm = this.formBuilder.group({
          fullName: ['', [Validators.required, Validators.minLength(2)]],
          email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
          phone: ['', [Validators.required, Validators.minLength(10)]],
          availableSlots: new FormArray(slotsForSelection)
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
      const scheduledSlots = this.registerForm.value.availableSlots
      .map((v, i) => v ? this.slots[i].id : null)
      .filter(v => v !== null);
    if (this.registerForm.invalid) {
      return;
    } else {
      this.submitPayload.emit({
      'ids': scheduledSlots,
      'email': this.f['email'].value,
      'fullName': this.f['fullName'].value,
      'phone': this.f['phone'].value });
    }
}}
