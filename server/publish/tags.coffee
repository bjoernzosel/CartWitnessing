import { Permissions } from '/imports/util/permissions.coffee'

Meteor.publish 'tags', (projectId) ->

	if typeof projectId == 'string' && projectId != ''
		if Roles.userIsInRole @userId, Permissions.member, projectId
			Projects.find projectId, fields: _id: 1, tags: 1, teams: 1
		else
			@ready()
	else
		@ready()
