import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'auth-remember',
    template: `
        <label>
            <input type="checkbox" (change)="onChange($event.target.checked)">
            Keep me logged in
        </label>
    `
})
export class AuthRememberComponent {
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChange(value: boolean) {
        this.checked.emit(value);
    }
}
