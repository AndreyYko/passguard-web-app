import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsMyAccountComponent } from './pages/settings-page/settings-my-account/settings-my-account.component';
import { SettingsOrganizationsComponent } from './pages/settings-page/settings-organizations/settings-organizations.component';
import { SettingsCreateOrganizationComponent } from './pages/settings-page/settings-create-organization/settings-create-organization.component';
import { ToolsPageComponent } from './pages/tools-page/tools-page.component';
import { ToolsPasswordGeneratorComponent } from './pages/tools-page/tools-password-generator/tools-password-generator.component';
import { VaultPageComponent } from './pages/vault-page/vault-page.component';

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
      { path: 'vault', component: VaultPageComponent },
      { path: 'tools', component: ToolsPageComponent, children: [
          { path: '', redirectTo: 'password-generator', pathMatch: 'full' },
          { path: 'password-generator', component: ToolsPasswordGeneratorComponent }
        ]
      },
      { path: 'settings', component: SettingsPageComponent, children: [
          { path: '', redirectTo: 'my-account', pathMatch: 'full' },
          { path: 'my-account', component: SettingsMyAccountComponent },
          { path: 'organizations', component: SettingsOrganizationsComponent },
          { path: 'create-organization', component: SettingsCreateOrganizationComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
