import Ember from 'ember';

const { RSVP } = Ember

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            filters: [{ name: 'Status', value: 'Done', type: 'k' }],
            availableFilters: [{name: "State", values: {0: 'Done', 1: 'WIP'}, type: 'project'},
                    {name: 'Workers', values: {0: 'Min', 1: 'Max'}, type: 'work'}]
        })
    },
});
