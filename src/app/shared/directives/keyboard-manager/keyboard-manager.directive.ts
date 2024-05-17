import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@Directive({
  selector: '[appKeyboardManager]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagerItemDirective) items!: QueryList<any>;

  @HostListener('keyup', ['$event'])
  manageKeys(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        console.log('derecha');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowUp':
        console.log('arriba');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        console.log('abajo');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        console.log('izquierda');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
    }
  }
  constructor() {}

  moveFocus(direction: ArrowDirection): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    const currentIndex = items.findIndex((item) => item.isFocused());
    console.log(currentIndex);
    const targetElement = items[currentIndex + direction];

    if (targetElement) {
      return targetElement;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
