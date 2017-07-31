import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    onChange(filters) {
      this.set('filters', filters);
    }
  }
});
