import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter', 'Integration | Component | ember filter', {
  integration: true
});

test('it renders filter list correctly', function(assert) {

  let filter = {name: 'filter', value: 2, type: 'project'};
  this.set('model', [filter]);

  this.render(hbs`{{ember-filter filters=model}}`)

  assert.equal(this.$('[data-test-name]').text().trim(), 'filter');
});
