import { Vessels } from '/imports/api/vessels/vessels.coffee'

import '/imports/ui/components/addVesselModal/addVesselModal.coffee'

import './vessels.tpl.jade'

searchString = new ReactiveVar

Template.vessels.onCreated ->

	initDone = false
	projectId = FlowRouter.getParam('projectId')

	drawVesselList = -> if initDone
		Tracker.afterFlush ->
			vessels = Vessels.find {}, sort: localName: 1

			columns = [
				{ name: 'id', title: '', breakpoints: '', filterable: false }
				{ name: 'localName', title: TAPi18n.__('vessels.localName'), breakpoints: '' }
				{ name: 'flag', title: TAPi18n.__('vessels.flag'), breakpoints: '' }
				{ name: 'type', title: TAPi18n.__('vessels.type'), breakpoints: '' }
				{ name: 'callsign', title: TAPi18n.__('vessels.callsign'), breakpoints: '' }
				{ name: 'eni', title: TAPi18n.__('vessels.eni'), breakpoints: '' }
				{ name: 'imo', title: TAPi18n.__('vessels.imo'), breakpoints: '' }
				{ name: 'mmsi', title: TAPi18n.__('vessels.mmsi'), breakpoints: '' }
				{ name: 'lastVisit', title: TAPi18n.__('vessels.lastVisit'), breakpoints: '' }
				{ name: 'contactPoint', title: TAPi18n.__('vessels.contactPoint'), breakpoints: '' }
				{ name: 'nextVisit', title: TAPi18n.__('vessels.nextVisit'), breakpoints: '' }
			]

			rows = []

			for vessel, index in vessels.fetch()
				rows.push
					id: index + 1
					localName: vessel.localName
					flag: vessel.flag
					type: TAPi18n.__('vessels.types.' + vessel.type)
					callsign: vessel.callsign
					eni: vessel.eni
					imo: vessel.imo
					mmsi: vessel.mmsi
					lastVisit: vessel.lastVisit
					contactPoint: vessel.contactPoint
					nextVisit: vessel.nextVisit

			$('#vesselTable').html('').footable
				columns: columns
				rows: rows
				paging:
					enabled: true
					size: 15
				sorting:
					enabled: true
				editing:
					enabled: true
					alwaysShow: true
					allowAdd: false
					allowDelete: false
					editRow: (row) ->
						wrs -> FlowRouter.setQueryParams editVessels: row.value._id

	@autorun ->
		FlowRouter.getParam('language') # redraw with new language

		handle = Meteor.subscribe 'vessels', searchString.get()
		if handle.ready()
			Vessels.find().observe
				added: drawVesselList
				changed: drawVesselList
				removed: drawVesselList

			initDone = true

			drawVesselList()

Template.vessels.events

	'click #addVessel': ->
		wrs -> FlowRouter.setQueryParams addVessel: true

	'keyup #vesselSearch': (e) ->
		searchString.set(e.target.value)
