import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  filters: null,

  actions: {
    removeFilter(filter) {
      let filters = this.get('filters')
    }
  }
});
