import Ember from 'ember';

export default Ember.Route.extend({


    model() {
        return Ember.A([
            {
                name: 'Open',
                value: 1,
                type: 'status'
            },
        ]);
    }
});
