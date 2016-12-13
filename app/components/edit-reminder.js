import Ember from 'ember';

export default Ember.Component.extend({
    reminder: null,
    router: Ember.inject.service('-routing'),

    actions: {
        save(reminder) { Ember.Logger.info('save called');
        reminder.save()
        .then(
            (value) => {
                Ember.Logger.info(value);
                this.get('router').transitionTo('reminders');
            }
        )
        .catch(
            () => {
                Ember.Logger.info('failure to save');
            }
        );
    },
        cancel() { Ember.Logger.info('Cancel called'); }
    }
});
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   store: Ember.inject.service(),
//
//   tagName: 'section',
//   classNames: ['new-reminder'],
//
//   title: '',
//   date: '',
//   notes: '',
//
//   actions: {
//     // createReminder() {
//     save() {
//       const reminder = this.getProperties('title', 'date', 'notes');
//       reminder.date = new Date(reminder.date);
//       this.get('store').createRecord('reminder', reminder).save().then(() => {
//         this.setProperties({title: '', date: '', notes: ''});
//       });
//     }
//   }
// });
