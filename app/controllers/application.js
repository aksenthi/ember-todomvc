import Ember from 'ember';

export default Ember.Controller.extend({
	repo: Ember.inject.service(),
	remaining: Ember.computed.filterBy('model', 'state', 'active'),
	completed: Ember.computed.filterBy('model', 'state', 'completed'),
	actions: {
		createTodo(e) {
			if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				this.get('repo').add({ title: e.target.value.trim(), state: 'active' });
				e.target.value = '';
			}
		},

		clearCompleted() {
			this.get('model').removeObjects(this.get('completed'));
			this.get('repo').persist();
		}
	}
});
