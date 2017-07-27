import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    filterResults(results) {
      this.set('results', results);
    }
  }
});
