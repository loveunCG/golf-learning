import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenStorage } from '../token-storage.service';
import { AuthexService } from './authex.service';
import { AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI, AUTH_SERVICE,  } from 'ngx-auth';
import { HttpClientModule } from '@angular/common/http';

export function factory(authenticationService: AuthexService) {
    return authenticationService;
}

@NgModule({

    imports: [
        HttpClientModule,
        AuthModule
    ],

    providers: [
        TokenStorage,
        AuthexService,
        { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
        { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
        {
        provide: AUTH_SERVICE,
        deps: [ AuthexService],
        useFactory: factory
        }
    ]
})
export class AuthexModule { }
