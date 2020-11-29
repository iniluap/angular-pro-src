import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from './shop-form.interface';

@Component({
    selector: 'shop-form',
    template: `
        <div>
            <form (ngSubmit)="onSubmit(form.value)" #shopForm="ngForm">
                <ng-content></ng-content>
                <label>
                    Name:
                    <input type="text" name="Name" ngModel>
                </label>
                <label>
                    Address:
                    <input type="text" name="address" ngModel>
                </label>
                <button type="submit">
                    Submit order
                </button>
            </form>
        </div>
    `
})
export class ShopFormComponent {
    @Output() submittedOrder: EventEmitter<Order> = new EventEmitter<Order>();

    onSubmit(value: Order) {
        this.submittedOrder.emit(value);
    }
}
