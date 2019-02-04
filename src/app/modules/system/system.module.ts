import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './system.component';
import { VaultComponent } from './components/vault/vault.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { PasswordGeneratorComponent } from './components/tools/password-generator/password-generator.component';
import { MyAccountComponent } from './components/settings/my-account/my-account.component';
import { OrganizationsComponent } from './components/settings/organizations/organizations.component';


@NgModule({
  declarations: [
    SystemComponent,
    VaultComponent,
    ToolsComponent,
    SettingsComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    PasswordGeneratorComponent,
    MyAccountComponent,
    OrganizationsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
