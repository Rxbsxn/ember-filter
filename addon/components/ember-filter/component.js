import Ember from 'ember';
import layout from './template';

const { Component, A, computed, set } = Ember;

export default Component.extend({
  layout,
  filters: null,

  uniqueList: computed.uniqBy('arrayFilters.[]', 'type'),

  arrayFilters: computed('filters.{}', function() {
    return A(this.get('filters'));
  }),

  actions: {
    addFilter(filter) {
      this._checkExistingRecords(filter);
    },

    removeFilter(filter) {
      // this.get('arrayFilters').removeObject(filter);
      set(filter, 'value', null);
      console.log(filter.value);
    }
  },

  _checkExistingRecords(filter) {
    let arrayFilters = this.get('arrayFilters');
    let sameTypeRecord = arrayFilters.findBy('type', filter.type);
    if (sameTypeRecord) {
      arrayFilters.removeObject(sameTypeRecord);
      arrayFilters.pushObject(filter);
    } else {
      arrayFilters.pushObject(filter);
    }
  }
});
