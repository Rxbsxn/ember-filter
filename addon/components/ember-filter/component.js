import Ember from 'ember';
import layout from './template';

const { Component, A, computed} = Ember;

export default Component.extend({
  layout,

  arrayFilters: computed('filters.{}',function() {
    return A(this.get('filters'));
  }),

  uniqueList: computed.uniqBy('arrayFilters', 'type'),

  availableFilters: A([{name: "State", values: {0: 'Done', 1: 'WIP'}, type: 'project'},
                    {name: 'Workers', values: {0: 'Min', 1: 'Max'}, type: 'work'}]),

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
