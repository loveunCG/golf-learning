import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
    {
        path: '', canActivate: [ PublicGuard ],
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
    },
    {
        // path: 'course',
        path: 'course', canActivate: [ ProtectedGuard ],

        loadChildren: './learning-system/learning-system.module#LearningSystemModule'
    },
    { path: 'verify/:param', component: VerifyComponent },
    { path: '**', redirectTo: '' },
    { path: 'error', loadChildren: './landing-page/landing-page.module#LandingPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
