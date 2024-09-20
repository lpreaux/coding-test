import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPage } from './core/pages/sign-in/sign-in.page';
import { SignUpPage } from './core/pages/sign-up/sign-up.page';

const routes: Routes = [
  {
    path: 'editor',
    loadChildren: () =>
      import('./domains/editor/editor.module').then(m => m.EditorModule),
  },
  {
    path: 'sign-in',
    component: SignInPage,
  },
  {
    path: 'sign-up',
    component: SignUpPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'editor',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
