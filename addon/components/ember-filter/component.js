import Ember from 'ember';
import layout from './template';

const { Component, A, computed} = Ember;

export default Component.extend({
  layout,
  availableFilters: null,
  filters: null,

  arrayFilters: computed('filters.{}',function() {
    return A(this.get('filters'));
  }),

  uniqueList: computed.uniqBy('arrayFilters', 'type'),

  actions: {
    addFilter(filter) {
      this._checkExistingRecords(filter);
    }
  },

  _checkExistingRecords(filter) {
    let arrayFilters = this.get('arrayFilters');
      let sameTypeRecord = arrayFilters.findBy('type', filter.type);
      if(sameTypeRecord) {
        arrayFilters.removeObject(sameTypeRecord);
        arrayFilters.pushObject(filter);
      } else {
        arrayFilters.pushObject(filter);
      }
  }
});
