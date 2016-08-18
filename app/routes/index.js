import Ember from 'ember';
import { EKMixin } from 'ember-keyboard';


export default Ember.Route.extend(EKMixin,{
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },

  actions: {
    saveCity3(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
