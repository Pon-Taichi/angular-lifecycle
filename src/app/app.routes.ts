import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { OtherComponent } from './other/other.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/parent',
    pathMatch: 'full',
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'other',
    component: OtherComponent,
  },
];
