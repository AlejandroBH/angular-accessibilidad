import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // answer = 'no';
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      answer: [
        {
          value: 'si',
          disabled: false,
        },
      ],
    });
  }

  submit(): void {
    this.form.get('answer')?.disable();
    console.log(this.form.value);
  }
}
