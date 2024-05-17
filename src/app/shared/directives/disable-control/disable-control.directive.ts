import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControl]',
})
export class DisableControlDirective implements OnChanges {
  @Input() appDisableControl = false;
  constructor(private ngControl: NgControl) {
    console.log(this.ngControl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['appDisableControl']) {
      const action = this.appDisableControl ? 'disable' : 'enable';
      this.ngControl.control![action]();
    }
  }
}
