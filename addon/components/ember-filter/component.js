import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  sortField: null,
  availableFilters: [{name: "State", values: {0: 'Done', 1: 'WIP'}, type: 'project'}, {name: 'Workers', values: {0: 'Min', 1: 'Max'}, type: 'work'}],

  actions: {
    addFilter(filter) {
      this.get('filters').pushObject(filter)
    }
  }
});
