import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  sendData() {},
  filterDelete() {},

  actions: {
    selectedState(value) {
      this.filterDelete(this.get('filter'));
      this.set('filter', { name: this.get('filter.name'),
                           value,
                           type: this.get('filter.type')
    });
      this.sendData(this.get('filter'));
    }
  }
});
