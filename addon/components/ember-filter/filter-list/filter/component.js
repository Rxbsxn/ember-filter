import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  onRemove() {},

  actions: {
    remove() {
      this.onRemove(this.get('filter'));
    }
  }
});
