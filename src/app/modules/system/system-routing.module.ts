import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { VaultComponent } from './components/vault/vault.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PasswordGeneratorComponent } from './components/tools/password-generator/password-generator.component';
import { MyAccountComponent } from './components/settings/my-account/my-account.component';
import { OrganizationsComponent } from './components/settings/organizations/organizations.component';

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
      { path: 'vault', component: VaultComponent },
      { path: 'tools', component: ToolsComponent, children: [
          { path: '', redirectTo: 'password-generator', pathMatch: 'full' },
          { path: 'password-generator', component: PasswordGeneratorComponent }
        ]
      },
      { path: 'settings', component: SettingsComponent, children: [
          { path: '', redirectTo: 'my-account', pathMatch: 'full' },
          { path: 'my-account', component: MyAccountComponent },
          { path: 'organizations', component: OrganizationsComponent }
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
