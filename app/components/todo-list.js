import Ember from 'ember';

export default Ember.Component.extend({
	repo: Ember.inject.service(),
	tagName: 'section',
	elementId: 'main',
	canToggle: true,
	allCompleted: Ember.computed('todos.@each.state', function () {
		return this.get('todos').isEvery('state', 'completed');
	}),

	actions: {
		enableToggle() {
			this.set('canToggle', true);
		},

		disableToggle() {
			this.set('canToggle', false);
		},

		toggleAll() {
			let allCompleted = this.get('allCompleted');
			this.get('todos').forEach(todo => Ember.set(todo, 'state', allCompleted? 'active':'completed'));
			this.get('repo').persist();
		}
	}
});
