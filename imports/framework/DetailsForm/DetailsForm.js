import moment from 'moment';
import RoleManager from '/imports/api/managers/RoleManager';
import RouteManager from '/imports/api/managers/RouteManager';

import './DetailsForm.jade';
import './DetailsForm.scss';

import './Actions/DetailsForm.Actions';
import './Array/Dropdown/DetailsForm.Array.Dropdown';
import './Array/Entity/DetailsForm.Array.Entity';
import './Array/Link/DetailsForm.Array.Link';
import './Checkbox/DetailsForm.Checkbox';
import './Date/DetailsForm.Date';
import './Dropdown/DetailsForm.Dropdown';
import './Email/DetailsForm.Email';
import './Link/DetailsForm.Link';
import './Navigation/DetailsForm.Navigation';
import './Phone/DetailsForm.Phone';
import './Text/DetailsForm.Text';
import './Textbox/DetailsForm.Textbox';
import './Header/DetailsForm.Header';

import { getValue, isType, loadData } from '/imports/framework/DetailsForm/DetailsForm.Helpers';

Template.DetailsForm.helpers({
  getValue,
  isEmptyArray(field) {
    const template = Template.instance();
    const value = getValue(field, template.item.get());
    return value.length == 0;
  },
  getSectionTranslation(key) {
    return TAPi18n.__(FlowRouter.getRouteName() + '.sections.' + key.replace(/_/g, '.'));
  },
  getBackgroundColor(section) {
    return (section.background != null ? section.background : '');
  },
  isType,
  getItem() {
    const template = Template.instance();
    return template.item.get();
  },
  getInstance() {
    return Template.instance();
  },
  isLoading() {
    return Template.instance().isLoading.get();
  },
  noResult() {
    return Template.instance().noResult.get();
  },
  hasPermissionToSee(definition) {
    let hasRole = true;
    let customFulfilled = true;

    if (definition.canSee != null) {
      const projectId = FlowRouter.getParam('projectId');
      hasRole = RoleManager.hasPermission(projectId, definition.canSee);
    }

    if (definition.custom != null) {
      const template = Template.instance();
      const item = template.item.get();
      customFulfilled = definition.custom(item);
    }

    return hasRole && customFulfilled;
  },
  sections() {
    const template = Template.instance();
    const item = template.item.get();

    if (item != null) {
      return template.sections.map((section) => {
        if (section.contents != null) {
          section.contents = section.contents.map((content) => {
            if ('canUpdate' in content) {
              if (content.canUpdate == 'author') {
                content.readonly = item.createdBy != Meteor.userId();
              }
            }
            if (content.type == 'array') {
              if ('action' in content.item && 'canDo' in content.item.action) {
                if (content.item.action.canDo == 'author' && item.createdBy != Meteor.userId()) {
                  delete content.item.action;
                }
              }
            }
            return content;
          });
        }
        if (section.actions != null) {
          section.actions = section.actions.filter((action) => {
            if ('canSee' in action && action.canSee == 'author') {
              if (item.createdBy != Meteor.userId()) {
                return false;
              }
            }
            return true;
          });
        }
        return section;
      })
      .filter((section) =>
        ('contents' in section && section.contents.length > 0)
        || ('actions' in section && section.actions.length > 0)
        || ('type') in section && section.type == 'header');
    } else {
      return template.sections;
    }
  },
  getProperty(entity, field) {
    if (field.type == 'dropdown') {
      return TAPi18n.__('language._' + entity._id.toUpperCase());
    }

    if (field.key in entity) {
      const value = entity[field.key];

      if (field.type == 'date') {
        if (value != null) {
          const uiFormat = TAPi18n.__('dateFormat.' + field.uiFormat);
          const dbFormat = field.dbFormat;

          return moment(value, dbFormat).format(uiFormat);
        }
        return '';
      }
      return entity[field.key];
    }
  },
  getNoElementsTranslation(item) {
    let translationString = [];

    if (item.action) {
      if (item.action.type == 'route') {
        translationString = item.action.route.split('.');
      } else if (item.action.type == 'method') {
        translationString = item.action.method.split('.');
      }
    } else {
      translationString = item.link.split('.');
    }

    translationString.pop();
    translationString.splice(1, 0, 'entity');
    translationString.push('noElements');

    return TAPi18n.__(translationString.join('.').replace(/_/g, '.'));
  }
});

Template.DetailsForm.onCreated(() => {
  const template = Template.instance(); // TODO: when changing profile email, also change visits

  template.sections = [];
  template.isLoading = new ReactiveVar(true);
  template.noResult = new ReactiveVar(false); // TODO: is this working?
  template.item = new ReactiveVar({});
});

Template.DetailsForm.onRendered(() => {
  $('body').addClass('md-skin');
  $('body').addClass('top-navigation');
  $('body').attr('type', 'DetailsForm');

  const template = Template.instance();
  const data = Template.currentData().data;

  template.sections = data.sections;
  template.getMethod = data.getMethod;

  template.isLoading.set(true);
  template.noResult.set(false);
  template.item.set({});

  loadData(template);

  window.scrollTo(0, 0);
});

Template.DetailsForm.onDestroyed(() => {
  $('body').removeClass('md-skin');
  $('body').removeClass('top-navigation');
  $('body').attr('type', '');
});

Template.DetailsForm.events({
  'click .input:not(.array-item)': (e) => {
    const $e = $(e.target).closest('.input');
    const key = $e.attr('key');
    const link = $e.attr('link');

    if (link != null) {
      let params = FlowRouter.current().params;

      if (key != null) {
        params.key = key;
      }

      FlowRouter.go(FlowRouter.path(link, params));
    } else {
      RouteManager.navigateToUpdate(key);
    }
  },
  'click .confirm-button': (e) => {
    const key = $(e.target).attr('key');
    const method = $(e.target).attr('method');
    const route = $(e.target).attr('route');

    let messagePathParts = FlowRouter.getRouteName().split('.');
    messagePathParts.pop();
    messagePathParts.splice(1, 0, 'entity');
    messagePathParts.push(key + 'Confirmation');

    if (confirm(TAPi18n.__(messagePathParts.join('.').replace(/_/g, '.')))) {
      Meteor.call(method, FlowRouter.current().params, (e, r) => {
        if (e == null) {
          FlowRouter.go(FlowRouter.path(route, FlowRouter.current().params));
        } else {
          alert('SERVER ERROR');
        }
      });
    }
  }
});
