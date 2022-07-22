import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';


const configs = {
  maxAge: 25,
  logOnly: environment.production,
  autoPause: true,
  name: 'My Music App Dev Tools',
  serialize: true,
};

@NgModule({
  imports: !environment.production
    ? [StoreDevtoolsModule.instrument(configs)]
    : [],
  exports: [StoreDevtoolsModule],
})
export class AppStoreDevtoolsModule {}
