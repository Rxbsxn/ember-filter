import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return [
            {
                name: 'Status',
                value: "Open",
                type: 'status'
            },
        ];
    }
});
