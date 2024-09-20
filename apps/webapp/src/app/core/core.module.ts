import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main/main.layout';
import { SimpleLayout } from './layouts/simple/simple.layout';
import { SignInPage } from './pages/sign-in/sign-in.page';
import {
  ClerkSignInComponent,
  ClerkSignUpComponent,
  ClerkUserButtonComponent,
} from 'ngx-clerk';
import { RouterLink } from '@angular/router';
import { SignUpPage } from './pages/sign-up/sign-up.page';

@NgModule({
  declarations: [MainLayout, SimpleLayout, SignInPage, SignUpPage],
  imports: [
    CommonModule,
    ClerkSignInComponent,
    RouterLink,
    ClerkSignUpComponent,
    ClerkUserButtonComponent,
  ],
  exports: [MainLayout],
})
export class CoreModule {}
