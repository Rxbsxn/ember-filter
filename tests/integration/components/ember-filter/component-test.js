import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
moduleForComponent('ember-filter', 'Integration | Component | ember filter', {
  integration: true,
  beforeEach() {
    let filters = Ember.A([{ name: 'filter', value: 2, type: 'project' }, { name: 'super filtr', value: 32, type: 'status' },
                   { name: 'extra filtr', value: 2, type: 'x' }]);
    this.set('model', filters)
  }
});

test('it renders filter list correctly', function(assert) {

  this.render(hbs`{{ember-filter filters=model}}`);

  assert.equal(this.$('[data-test-name]:first').text().trim(), '2');
  assert.equal(this.$('[data-test-name]:last').text().trim(), '2');
});

//{{#ember-filter/add filters=availableFilters addFilter=(action "addFilter")}}

test('it should add new record', function(assert) {
  this.set('addAction', () => {
    Ember.run(() => {
      let filter = {name: 'State', value: 'checked', type: 'unknown'}
      this.get('model').pushObject(filter);
    })
  });

  this.render(hbs`{{ember-filter filters=model}}`);

  assert.equal(this.$('[data-test-name]').length, 3);

  this.render(hbs`{{ember-filter filters=model add=(action addAction)}}`);
  this.get('addAction')()
  assert.equal(this.$('[data-test-name]').length, 4);

})
