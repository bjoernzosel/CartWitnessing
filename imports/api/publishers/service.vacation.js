import { Meteor } from 'meteor/meteor'
import moment from 'moment'
import Users from '/imports/api/users/Users'
import { checkPermissions } from '/imports/framework/Functions/Security'
import { validate, validateProjectId, validateUserId } from '../../framework/Functions/Validations'
import { getExtendedPublisher } from './Functions'
import Permissions from '../../framework/Constants/Permissions'

function publisherProfileVacationInsert ({ projectId, userId }, newVacation) {
  validate('vacation', {
    projectId: {
      type: String,
      custom () {
        validateProjectId(this.value, Permissions.admin)
      }
    },
    userId: {
      type: String,
      custom () {
        validateUserId(
          this.value,
          this.field('projectId').value,
          Permissions.member)
      }
    },
    start: Number,
    end: {
      type: Number,
      custom () {
        if (this.value < this.field('start').value) {
          return 'hasToBeBigger'
        }
      }
    }
  }, {
    projectId,
    userId,
    ...newVacation
  })

  try {
    let vacations = getExtendedPublisher(userId, projectId).profile.vacations

    // support legacy format
    for (let vacation of vacations) {
      if (vacation.createdAt == null) {
        vacation.start = parseInt(moment(vacation.start, 'YYYYDDD').format('YYYYMMDD'), 10)
        vacation.end = parseInt(moment(vacation.end, 'YYYYDDD').format('YYYYMMDD'), 10)
      }
    }

    vacations.push({
      start: newVacation.start,
      end: newVacation.end
    })

    Users.persistence.update(userId, 'profile.vacations', vacations)
  } catch (e) {
    throw new Meteor.Error(e)
  }
}

function publisherProfileVacationDelete ({ projectId, userId }, vacationId) {
  checkPermissions(projectId, userId)

  try {
    const vacations = getExtendedPublisher(userId, projectId).profile.vacations
    let newVacations = []

    for (let vacation of vacations) {
      if (vacation._id !== vacationId) {
        newVacations.push(vacation)
      }
    }

    Users.persistence.update(userId, 'profile.vacations', newVacations)
  } catch (e) {
    throw new Meteor.Error(e)
  }
}

export {
  publisherProfileVacationInsert,
  publisherProfileVacationDelete
}
