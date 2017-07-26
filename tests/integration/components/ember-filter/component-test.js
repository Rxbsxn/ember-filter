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
      type: 'project'
    }, {
      name: 'super filtr',
      value: 32,
      type: 'status'
    },
    {
      name: 'extra filtr',
      value: 2,
      type: 'x'
    }
    ]);

    let filtersTwo = A([
      {
        name: 'new project',
        value: 3,
        type: 'j'
      }, {
        name: 'ccc',
        value: 4
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

  assert.equal(this.$('[data-test-name]:first').text().trim(), 'filter: 2');
  assert.equal(this.$('[data-test-name]:last').text().trim(), 'extra filtr: 2');

  this.render(hbs `{{#ember-filter filters=filtersTwo as |filters|}}
    {{filters.list}}
    {{/ember-filter}}
  `);
  assert.equal(this.$('[data-test-name]:first').text().trim(), 'new project: 3');
  assert.equal(this.$('[data-test-name]:last').text().trim(), 'ccc: 4');
});

test('it should add new record', function (assert) {
  this.set('addAction', () => {
    run(() => {
      let filter = {
        name: 'State',
        value: 'checked',
        type: 'unknown'
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
