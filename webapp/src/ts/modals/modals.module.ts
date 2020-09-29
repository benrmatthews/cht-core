import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { MmModal } from './mm-modal/mm-modal';
import { ReloadingComponent } from './reloading/reloading.component';
import { LogoutConfirmComponent } from './logout/logout-confirm.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {UpdatePasswordComponent} from './edit-user/update-password.component';
import {EditUserSettingsComponent} from './edit-user/edit-user-settings.component';


@NgModule({
  declarations: [
    MmModal,
    ReloadingComponent,
    LogoutConfirmComponent,
    FeedbackComponent,
    UpdatePasswordComponent,
    EditUserSettingsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  exports: [
    ReloadingComponent,
    LogoutConfirmComponent,
    FeedbackComponent,
    UpdatePasswordComponent,
    EditUserSettingsComponent,
  ]
})
export class ModalsModule { }
