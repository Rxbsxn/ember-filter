import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember'

const { A } = Ember;

moduleForComponent('ember-filter/filter-list', 'Unit | Component | ember filter/filter list', {
    unit: true,
    beforeEach() {
        let component = this.subject();
        let filters = A([{name: "Open", value: 0, type: "project"}, {name: 'X', value: 1, type: "qaz"}]);
        component.set('filters', filters);
    }
});

test('it renders', function(assert) {
    let component = this.subject();

    assert.ok(component);
});

test('it removes filter from list', function(assert) {
    let filter = { name: "Close", value: 1, type: 'work' }
    let component = this.subject();

    component.get('filters').pushObject(filter);

    assert.equal(component.get('filters').length, 3);

    component.send('removeFilter', filter);

    assert.equal(component.get('filters').length, 2);
});
