import './DetailsForm.Dropdown.jade';

import { getValue, getKey } from '/imports/framework/DetailsForm/DetailsForm.Helpers';
import { getEntityTranslation } from '/imports/framework/Helpers';

Template.DetailsFormDropdown.helpers({
  getEntityTranslation,
  getKey,
  getValue(definition, entity) {
    const value = getValue(definition, entity);

    let routeNameParts = FlowRouter.getRouteName().split('.');
    routeNameParts.pop();
    routeNameParts.splice(1, 0, 'entity');
    routeNameParts.push(definition.key.replace(/_/g, '.') + 'Values');
    routeNameParts.push(value);

    return TAPi18n.__(routeNameParts.join('.'));
  }
});

Template.DetailsFormDropdown.onCreated(() => {});

Template.DetailsFormDropdown.onRendered(() => {});

Template.DetailsFormDropdown.onDestroyed(() => {});

Template.DetailsFormDropdown.events({});
