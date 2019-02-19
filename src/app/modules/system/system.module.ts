import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { VaultOrganizationsListComponent } from './components/vault-organizations-list/vault-organizations-list.component';
import { VaultFiltersComponent } from './components/vault-filters/vault-filters.component';
import { VaultSettingsListComponent } from './components/vault-settings-list/vault-settings-list.component';
import { SettingsOrganizationsListComponent } from './components/settings-organizations-list/settings-organizations-list.component';
import { SettingsOrganizationsListItemComponent } from './components/settings-organizations-list-item/settings-organizations-list-item.component';
// Services
import { CommonService } from './services/common/common.service';
// Store
import { Reducers } from './store/reducers';
import { HeaderUserPopUpComponent } from './components/header-user-pop-up/header-user-pop-up.component';
import { AddItemPopUpComponent } from './components/add-item-pop-up/add-item-pop-up.component';
import { AddItemLoginFormComponent } from './components/add-item-login-form/add-item-login-form.component';
import { AddItemCardFormComponent } from './components/add-item-card-form/add-item-card-form.component';
import { AddItemNoteFormComponent } from './components/add-item-note-form/add-item-note-form.component';
import { SettingsCreateOrganizationComponent } from './pages/settings-page/settings-create-organization/settings-create-organization.component';
import { VaultItemsListComponent } from './components/vault-items-list/vault-items-list.component';
import { VaultItemComponent } from './components/vault-item/vault-item.component';

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
    MiddleContentHeaderComponent,
    DropDownComponent,
    VaultOrganizationsListComponent,
    VaultFiltersComponent,
    VaultSettingsListComponent,
    SettingsOrganizationsListComponent,
    SettingsOrganizationsListItemComponent,
    HeaderUserPopUpComponent,
    AddItemPopUpComponent,
    AddItemLoginFormComponent,
    AddItemCardFormComponent,
    AddItemNoteFormComponent,
    SettingsCreateOrganizationComponent,
    VaultItemsListComponent,
    VaultItemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    StoreModule.forRoot(Reducers),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService
  ]
})
export class SystemModule { }
