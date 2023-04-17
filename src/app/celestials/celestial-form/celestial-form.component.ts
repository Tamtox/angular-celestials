import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-celestial-form',
  templateUrl: './celestial-form.component.html',
  styleUrls: ['./celestial-form.component.scss'],
})
export class CelestialFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
