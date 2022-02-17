import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Router Store
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, routerReducers } from './router-store';
// import { environment } from '../environments/environment';

const environment = {
  production: false,
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      routerReducers,
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class SharedDataAccessNgrxRootStoreModule {}
