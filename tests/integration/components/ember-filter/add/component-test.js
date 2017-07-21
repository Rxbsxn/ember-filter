import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/add', 'Integration | Component | ember filter/add', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-filter/add}}`);

  assert.equal(this.$().text().trim(), '+');

});
