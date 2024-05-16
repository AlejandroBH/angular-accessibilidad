import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-si-no-buttons-group',
  templateUrl: './si-no-buttons-group.component.html',
  styleUrls: ['./si-no-buttons-group.component.scss'],
})
export class SiNoButtonsGroupComponent implements OnInit {
  @Input() value = '';
  @Input() label = '';

  @Output() valueChange = new EventEmitter<string>();

  options = SiNoButtonGroupOptions;

  constructor() {}

  ngOnInit(): void {}

  activate(value: string): void {
    console.log(value);
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum SiNoButtonGroupOptions {
  SI = 'si',
  NO = 'no',
}
