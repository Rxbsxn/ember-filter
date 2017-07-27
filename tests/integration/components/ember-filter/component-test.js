import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { A, run } = Ember;

moduleForComponent('ember-filter', 'Integration | Component | ember filter', {
  integration: true,
  beforeEach() {
    let filters = A([{
      name: 'filter',
      value: 2,
      type: 'project',
      values: { s: 2 }
    }, {
      name: 'super filtr',
      value: 32,
      type: 'status',
      values: { s: 32 }
    },
    {
      name: 'extra filtr',
      value: 2,
      type: 'x',
      values: { s: 2 }
    }
    ]);

    let filtersTwo = A([
      {
        name: 'new project',
        value: 3,
        type: 'j',
        values: { s: 3 }
      }, {
        name: 'ccc',
        value: 4,
        values: { s: 4 }
      }
    ]);

    this.set('filtersTwo', filtersTwo);
    this.set('model', filters);
  }
});

test('it renders filter list correctly', function (assert) {

  this.render(hbs `{{#ember-filter filters=model as |filters|}}
    {{filters.list}}
    {{/ember-filter}}
  `);

  assert.equal(this.$('[data-test-name]:first').text().trim(), 'filter: s');
  assert.equal(this.$('[data-test-name]:last').text().trim(), 'extra filtr: s');

  this.render(hbs `{{#ember-filter filters=filtersTwo as |filters|}}
    {{filters.list}}
    {{/ember-filter}}
  `);
  assert.equal(this.$('[data-test-name]:first').text().trim(), 'new project: s');
  assert.equal(this.$('[data-test-name]:last').text().trim(), 'ccc: s');
});

test('it should add new record', function (assert) {
  this.set('addAction', () => {
    run(() => {
      let filter = {
        name: 'State',
        value: 3,
        type: 'unknown',
        values: { s: 3 }
      };
      this.get('model').pushObject(filter);
    });
  });

  this.render(hbs `{{#ember-filter filters=model as |filters|}}
    {{filters.list}}
    {{/ember-filter}}
  `);
  assert.equal(this.$('[data-test-name]').length, 3);

  this.render(hbs `{{#ember-filter filters=model addFilter=(action addAction) as |filters|}}
    {{filters.list}}
    {{/ember-filter}}
  `);

  this.get('addAction')();
  assert.equal(this.$('[data-test-name]').length, 4);

});
