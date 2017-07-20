import Ember from 'ember';

export default Ember.Route.extend({


    model() {
        return Ember.A([
            {
                name: 'Status',
                value: "Open",
                type: 'status'
            },
        ]);
    }
});
