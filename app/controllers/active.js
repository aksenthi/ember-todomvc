import Ember from 'ember';

export default Ember.Controller.extend({
	todos: Ember.computed.filterBy('model', 'state', 'active')
	// todos: Ember.computed.filter('model.@each.completed', m => m.completed === false && m.deferred == false)
});
