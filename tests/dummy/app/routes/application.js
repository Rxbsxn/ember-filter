import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return [{ name: 'projectStatus', key: 'status', values: { open: false, done: true }, value: false }];
  }

});
