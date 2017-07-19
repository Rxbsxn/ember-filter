import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/filter-list', 'Integration | Component | ember filter/filter list', {
  integration: true,
  beforeEach() {
    let filter = {name: 'filter', value: 2, type: 'project' };
    this.set('model', [filter]);
  }
});

test('it renders empty filter list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list}}`);

  assert.equal(this.$('[data-test-not-found]').text().trim(), 'Filters not found');
});

test('it renders filter list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list filters=model}}`);

  assert.equal(this.$('[data-test-name]').text().trim(), 'filter');
});

test('it sorts filter list by field', function(assert) {
  let filters = [{name: "b", value: 3, type: 'project'}, {name: 'a', value: 2, type: 'project'}];
  this.set('model', filters);

  this.render(hbs`{{ember-filter/filter-list filters=model sortField="value"}}`)
  assert.equal(this.$('[data-test-name]:first').text().trim(), "a")
})

test('it removes filter from list', function(assert) {
  this.render(hbs`{{ember-filter/filter-list filters=model sortField="name"}}`);

  assert.equal(this.$('[data-test-name]').length, 1);

  this.$('button').click();
  assert.equal(this.$('[data-test-not-found]').text().trim(), '')
})


