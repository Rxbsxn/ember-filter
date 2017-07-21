import Ember from 'ember';

export default Ember.Route.extend({

    // model() {
    //     return [
    //         {
    //             name: 'Status',
    //             value: "Open",
    //             type: 'status'
    //         },
    //     ];
    // }
    model() {
        return Ember.RSVP.hash({
            filters: { name: 'Status', value: 0}
        })
    }
});
