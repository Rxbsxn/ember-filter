import Ember from 'ember';
import layout from './template';

const { Component } = Ember;

export default Component.extend({
  layout,

  onRemove() {},

  actions: {
    remove() {
      this.get('onRemove')(this.get('filter'));
    }
  }
});
