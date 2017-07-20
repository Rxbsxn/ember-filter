import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/add/value', 'Integration | Component | ember filter/add/value', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-filter/add/value}}`);

  assert.equal(this.$().text().trim(), 'Choose Value');

});
