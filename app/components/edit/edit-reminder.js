import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('-routing'),

  tagName: 'section',
  classNames: ['edit-reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({title: '', date: '', notes: ''});
      });
    }
  }
});
