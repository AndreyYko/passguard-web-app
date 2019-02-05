import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SettingsMyAccountComponent } from './pages/settings-page/settings-my-account/settings-my-account.component';
import { SettingsOrganizationsComponent } from './pages/settings-page/settings-organizations/settings-organizations.component';
import { ToolsPasswordGeneratorComponent } from './pages/tools-page/tools-password-generator/tools-password-generator.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';


@NgModule({
  declarations: [
    SystemComponent,
    VaultPageComponent,
    ToolsPageComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    ToolsPasswordGeneratorComponent,
    SettingsMyAccountComponent,
    SettingsOrganizationsComponent,
    VaultPageComponent,
    ToolsPageComponent,
    SettingsPageComponent,
    ToolsPasswordGeneratorComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
