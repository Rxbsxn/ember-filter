import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ name: 'projectStatus', key: 'status', values: { open: false, done: true }, value: 'open' }];
  }
});
