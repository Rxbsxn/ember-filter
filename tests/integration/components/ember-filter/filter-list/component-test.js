import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/filter-list', 'Integration | Component | ember filter/filter list', {
  integration: true
});

test('it renders empty filter list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list}}`)

  assert.equal(this.$('').text().trim(), 'Filters not found')
});

test('it renders filter list', function(assert) {
  let filter = {name: 'filter', value: 2, type: 'project'};
  this.set('model', [filter]);

  this.render(hbs`{{ember-filter/filter-list filters=model}}`)

  assert.equal(this.$().text().trim(), 'filter')
});


