import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  imports: [
    CommonModule, SignalsRoutingModule
  ],
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignalsModule { }
