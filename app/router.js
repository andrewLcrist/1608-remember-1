import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reminders', {path: '/reminders'}, function() {
    this.route('reminder', {path: '/:reminder_id'});
    this.route('new', {path: '/new'});
  });
});

export default Router;
