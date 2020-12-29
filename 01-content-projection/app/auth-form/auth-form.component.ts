import { 
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  AfterContentInit,
  QueryList,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
  Renderer,
} from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: #9f72e6; }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')"
        ></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  // gives DOM element
  @ViewChild('email') email: ElementRef;

  // ViewChildren is only available in ngAfterViewInit
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // You can go away with this on web, where you access DOM:
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

    // Platform-agnostic way:
    this.renderer.setElementAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter your email address'
    );
    this.renderer.setElementClass(
      this.email.nativeElement,
      'email',
      true
    );
    this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      })
    }
    this.changeDetector.detectChanges();
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked;
        })
      })
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
