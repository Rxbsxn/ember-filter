import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  addFilter() {},

  actions: {
    selectState(key) {
      this._prepareFilter(key)
      this.addFilter(this.get('filter'));
    }
  },

  _prepareFilter(key) {
    let filter = this.get('filter');
      this.set('filter', {
        name: filter.name,
        value: filter.values[key],
        type: filter.type
      });
  }
});
