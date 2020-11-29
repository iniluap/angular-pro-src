import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShopFormComponent } from './shop-form.component';

@NgModule({
    declarations: [
        ShopFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        ShopFormComponent,
    ],
})
export class ShopFormModule {}
