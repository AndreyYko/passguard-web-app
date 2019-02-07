import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
// Main components & routing module
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
// Pages
import { VaultPageComponent } from './pages/vault-page/vault-page.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MobileMenuLinkComponent } from './components/mobile-menu-link/mobile-menu-link.component';
import { SettingsMyAccountComponent } from './pages/settings-page/settings-my-account/settings-my-account.component';
import { SettingsOrganizationsComponent } from './pages/settings-page/settings-organizations/settings-organizations.component';
import { ToolsPasswordGeneratorComponent } from './pages/tools-page/tools-password-generator/tools-password-generator.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { MiddleContentHeaderComponent } from './components/middle-content-header/middle-content-header.component';
import { SettingsMyAccountAccountComponent } from './pages/settings-page/settings-my-account/settings-my-account-account/settings-my-account-account.component';
import { SettingsMyAccountEmailComponent } from './pages/settings-page/settings-my-account/settings-my-account-email/settings-my-account-email.component';
import { SettingsMyAccountPasswordComponent } from './pages/settings-page/settings-my-account/settings-my-account-password/settings-my-account-password.component';
import { SettingsMyAccountDangerComponent } from './pages/settings-page/settings-my-account/settings-my-account-danger/settings-my-account-danger.component';

import { Reducers } from './store/reducers';


@NgModule({
  declarations: [
    SystemComponent,
    VaultPageComponent,
    ToolsPageComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    MobileMenuLinkComponent,
    ToolsPasswordGeneratorComponent,
    SettingsPageComponent,
    SettingsMyAccountComponent,
    SettingsMyAccountAccountComponent,
    SettingsMyAccountEmailComponent,
    SettingsMyAccountPasswordComponent,
    SettingsMyAccountDangerComponent,
    SettingsOrganizationsComponent,
    VaultPageComponent,
    ToolsPageComponent,
    ToolsPasswordGeneratorComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MiddleContentHeaderComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    StoreModule.forRoot(Reducers)
  ]
})
export class SystemModule { }
