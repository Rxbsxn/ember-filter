import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter/add', 'Integration | Component | ember filter/add', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{ember-filter/add}}`);

  assert.equal(this.$().text().trim(), '+');

});

test('it opens list after click', function(assert) {
  this.set('isAdding', false);
  this.render(hbs`{{ember-filter/add isAdding=isAdding}}`);

  this.$('[data-test-button]').click();

  assert.equal(this.get('isAdding'), true);
});

test('it renders value component after click', function(assert) {
  this.set('isAdding', true);
  this.render(hbs`{{ember-filter/add isAdding=isAdding}}`)

  this.render(hbs`{{ember-filter/add/value}}`);

  assert.equal(this.$('').text().trim(), 'Choose Value');
})
