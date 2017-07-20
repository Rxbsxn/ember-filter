import Ember from 'ember';
import layout from './template';

const { Component, A, computed} = Ember;

export default Component.extend({
  layout,

  arrayFilters: computed('filters.{}',function() {
    return A(this.get('filters'));
  }),

  availableFilters: A([{name: "State", values: {0: 'Done', 1: 'WIP'}, type: 'project'},
                    {name: 'Workers', values: {0: 'Min', 1: 'Max'}, type: 'work'}]),

  actions: {
    addFilter(filter) {
      this.get('arrayFilters').pushObject(filter);
    },

    removeFromAvailables(filter) {
      this.get('availableFilters').removeObject(filter);
    }
  }
});
