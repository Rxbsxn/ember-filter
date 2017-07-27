import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  actions: {
    selectState (key) {
      this._prepareFilter(key);
      this.addFilter(this.get('filter'));
    }
  },

  addFilter () {},

  _prepareFilter (key) {
    let filter = this.get('filter');
    this.set('filter', {
      name: filter.name,
      value: key,
      type: filter.type,
      values: filter.values
    });
  }

});
