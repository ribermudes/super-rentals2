import Ember from 'ember';
import { EKMixin } from 'ember-keyboard';
import { keyDown } from 'ember-keyboard';
import { keyUp } from 'ember-keyboard';


export default Ember.Route.extend(EKMixin,{
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  activateKeyboard: Ember.on('init', function() {
  this.set('keyboardActivated', true);
}),
  s1Function: Ember.on(keyDown('KeyS'), function() {
  console.log('`KeyS` was depressed');
}),
  s2Function: Ember.on(keyUp('KeyS'), function() {
  console.log('`KeyS` was unpressed');
}),
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
