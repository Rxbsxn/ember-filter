import Ember from 'ember';
import layout from './template';

const { Component, computed } = Ember;

export default Component.extend({
  layout,

  filterStatus: computed('filter.{}', function() {
    let filter = this.get('filter');
    return this._getKey(filter.values, filter.value);
  }),

  actions: {
    remove() {
      this.get('onRemove')(this.get('filter'));
    }
  },

  onRemove() {},

  _getKey(obj, val) {
    return Object.keys(obj).find((key) => obj[key] === val);
  }
});
