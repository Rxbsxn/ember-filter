import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/filter-list/filter', 'Integration | Component | ember filter/filter list/filter', {
  integration: true,
  beforeEach() {
    let filter = { name: 'super filter', value: 3, type: 'project', values: { s: 3 } };
    this.set('filter', filter);
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-filter/filter-list/filter filter=filter}}`);

  assert.equal(this.$('[data-test-name]').text().trim(), 'super filter: s');
});
