import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  sendData() {},

  actions: {
    selectedState(value) {
      this.set('filter', { name: this.get('filter.name'),
                           value,
                           type: this.get('filter.type')
    });
      this.sendData(this.get('filter'));
    }
  }
});
