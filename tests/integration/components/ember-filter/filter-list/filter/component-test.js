import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/filter-list/filter', 'Integration | Component | ember filter/filter list/filter', {
  integration: true
});

test('it renders', function(assert) {
  let filter = { name: 'super filter', value: 3, type: 'project' }
  this.set('filter', filter);

  this.render(hbs`{{ember-filter/filter-list/filter filter=filter}}`);

  assert.equal(this.$('[data-test-name]').text().trim(), 'super filter');
});
