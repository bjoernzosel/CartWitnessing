import { Template } from 'meteor/templating';

import Permissions from '/imports/framework/Constants/Permissions';

Template['dashboard.details'].helpers({
  data: {
    getMethod: 'dashboard.get',
    navigation: {},
    sections: [{
      title: 'myProjects',
      contents: [{
        key: 'myProjects',
        type: 'array',
        item: {
          key: 'project',
          type: 'link',
          icon: 'group',
          action: {
            type: 'route',
            route: 'project.details'
          }
        }
      }]
    }, {
      title: 'missingShiftReports',
      contents: [{
        key: 'missingShiftReports',
        type: 'array',
        item: {
          key: 'shift',
          link: 'shift.details',
          icon: 'announcement',
          type: 'entity',
          rows: [{
            key: 'tag'
          }, {
            key: 'date',
            type: 'date',
            dbFormat: 'YYYYMMDD',
            uiFormat: 'date'
          }, {
            key: 'start',
            type: 'date',
            dbFormat: 'Hmm',
            uiFormat: 'time'
          }, {
            key: 'end',
            type: 'date',
            dbFormat: 'Hmm',
            uiFormat: 'time'
          }]
        }
      }]
    }, {
      title: 'upcomingShifts',
      contents: [{
        key: 'upcomingShifts',
        type: 'array',
        item: {
          key: 'shift',
          link: 'shift.details',
          icon: 'event_available',
          type: 'entity',
          rows: [{
            key: 'tag'
          }, {
            key: 'date',
            type: 'date',
            dbFormat: 'YYYYMMDD',
            uiFormat: 'date'
          }, {
            key: 'start',
            type: 'date',
            dbFormat: 'Hmm',
            uiFormat: 'time'
          }, {
            key: 'end',
            type: 'date',
            dbFormat: 'Hmm',
            uiFormat: 'time'
          }]
        }
      }]
    }, {
      title: 'pendingRequests',
      contents: [{
        key: 'pendingRequests',
        type: 'link',
        route: 'dashboard.pendingRequests.details',
        icon: 'hourglass_empty'
      }]
    }, {
      title: 'olderShifts',
      contents: [{
        key: 'olderShifts',
        type: 'link',
        route: 'dashboard.olderShifts.details',
        icon: 'event_available'
      }]
    }, {
      title: 'administration',
      contents: [{
        key: 'profile',
        type: 'link',
        route: 'profile',
        icon: 'account_circle'
      }, {
        key: 'language',
        type: 'link',
        route: 'language.details',
        icon: 'translate'
      }, {
        key: 'projects',
        type: 'link',
        route: 'project.search',
        icon: 'view_module',
        canSee: Permissions.support
      }, {
        key: 'users',
        type: 'link',
        route: 'user.search',
        icon: 'group',
        canSee: Permissions.support
      }, {
        key: 'onlineUsers',
        type: 'link',
        route: 'users.online.details',
        icon: 'group',
        canSee: Permissions.support
      }]
    }, {
      title: 'account',
      contents: [{
        key: 'oldDashboard',
        type: 'link',
        route: 'home',
        icon: 'dashboard',
        canSee: Permissions.admin
      }, {
        key: 'logout',
        type: 'link',
        route: 'logout',
        icon: 'power_settings_new'
      }]
    }]
  }
});
