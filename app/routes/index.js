import Ember from 'ember';
import { EKMixin } from 'ember-keyboard';


export default Ember.Route.extend(EKMixin,{
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
