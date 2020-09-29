import {ModalService} from "@mm-modals/mm-modal/mm-modal";
import {UserSettingsService} from "@mm-services/user-settings.service";
import {Component} from "@angular/core";
import {UpdatePasswordComponent} from "@mm-modals/edit-user/update-password.component";
import {EditUserSettingsComponent} from "@mm-modals/edit-user/edit-user-settings.component";

@Component({
  templateUrl: './configuration-user.component.html'
})
export class ConfigurationUserComponent {

  loading: boolean;
  user;

  constructor(
    private modalService: ModalService,
    private userSettingsService: UserSettingsService,
  ) {
    this.loading = true;
    this.userSettingsService.get().then(user => {
      this.loading = false;
      this.user = user;
    });
  }

  updatePassword() {
    this.modalService.show(UpdatePasswordComponent);
  }

  editSettings() {
    this.modalService.show(EditUserSettingsComponent);
  }
}

/*
angular.module('inboxControllers').controller('ConfigurationUserCtrl',
  function (
    Modal,
    UserSettings
  ) {

    'use strict';
    'ngInject';

    const ctrl = this;
    this.loading = true;
    UserSettings().then(user => {
      this.loading = false;
      this.user = user;
    });

    ctrl.updatePassword = function() {
      Modal({
        templateUrl: 'templates/modals/update_password.html',
        controller: 'EditUserCtrl',
        controllerAs: 'editUserCtrl'
      });
    };

    ctrl.editSettings = function() {
      Modal({
        templateUrl: 'templates/modals/edit_user_settings.html',
        controller: 'EditUserCtrl',
        controllerAs: 'editUserCtrl'
      });
    };

  }
);*/
