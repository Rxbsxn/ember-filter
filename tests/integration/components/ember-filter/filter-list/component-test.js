import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { A } = Ember;

moduleForComponent('ember-filter/filter-list', 'Integration | Component | ember filter/filter list', {
  integration: true,
  beforeEach() {
    let filters = A([
      { name: 'filter', value: 2, type: 'project', values: { s: 2 } },
      { name: 'super filtr', value: 21, values: { s: 21 } },
      { name: 'extra filtr', value: 73, values: { s: 73 } }
    ]);
    this.set('model', filters);
  }
});

test('it renders empty filter list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list}}`);

  assert.equal(this.$('[data-test-not-found]').text().trim(), 'Filters not found');
});

test('it renders filter list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list filters=model}}`);

  assert.equal(this.$('[data-test-name]').length, 3);
});

test('it removes filter from list', function(assert) {
  this.set('removeMethod', (filter) => {
    this.get('model').removeObject(filter);
  });
  this.render(hbs`{{ember-filter/filter-list filters=model removeFilter=(action removeMethod)}}`);

  assert.equal(this.$('[data-test-name]').length, 3);

  this.$('[data-test-button]:first').click();

  assert.equal(this.$('[data-test-name]').length, 2);

  this.$('[data-test-button]').click();

  assert.equal(this.$('[data-test-name]').length, 0);
  assert.equal(this.$('[data-test-not-found]').text().trim(), 'Filters not found');
});

