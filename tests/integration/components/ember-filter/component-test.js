import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-filter', 'Integration | Component | ember filter', {
  integration: true
});

test('it renders filter list correctly', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{ember-filter}}`);
  let filter = {name: 'filter', value: 2, type: 'project'};
  this.set('model', [filter]);

  this.render(hbs`{{ember-filter filters=model}}`)

  assert.equal(this.$('').text().trim(), 'filter');
  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#ember-filter}}
  //     template block text
  //   {{/ember-filter}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
