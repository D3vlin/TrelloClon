import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent {
 @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
}
