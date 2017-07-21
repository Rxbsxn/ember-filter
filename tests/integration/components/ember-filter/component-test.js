import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter', 'Integration | Component | ember filter', {
  integration: true,
  beforeEach() {
    let filters = [{ name: 'filter', value: 2, type: 'project' }, { name: 'super filtr', value: 32, type: 'status' },
                   { name: 'extra filtr', value: 2, type: 'x' }];
    this.set('model', filters)
  }
});

test('it renders filter list correctly', function(assert) {

  this.render(hbs`{{ember-filter filters=model}}`)

  assert.equal(this.$('[data-test-name]:first').text().trim(), '2');
  assert.equal(this.$('[data-test-name]:last').text().trim(), '2');
});
