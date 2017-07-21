import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember'

const { A } = Ember;

moduleForComponent('ember-filter', 'Unit | Component | ember filter', {
    unit: true,
    beforeEach() {
        let component = this.subject();
        let filters = A([{name: "Open", value: 0, type: "project"}, {name: 'X', value: 1, type: "qaz"}]);
        component.set('arrayFilters', filters);
    }
});

test('it renders', function(assert) {
    let component = this.subject();

    assert.ok(component);
});

test('filters count', function(assert) {
    let component = this.subject();

    assert.equal(component.get('arrayFilters').length, 2);
});

test('it adds new filter', function(assert) {
    let component = this.subject();
    let filter = {name: 'Super Filtr', value: 0, type: 'a'}

    assert.equal(component.get('arrayFilters').length, 2);

    component.send('addFilter', filter)
    assert.equal(component.get('arrayFilters').length, 3);

});

test('it removes already existing filter in arr', function(assert) {
    let component = this.subject();
    let filter = {name: 'New filter', value: 1, type: 'project'}

    assert.equal(component.get('arrayFilters').length, 2);
    assert.equal(component.get('arrayFilters').findBy('type', 'project').name, 'Open');

    component.send('addFilter', filter);

    assert.equal(component.get('arrayFilters').length, 2);
    assert.equal(component.get('arrayFilters').findBy('type', 'project').name, 'New filter')
})

