'use strict';

Router.route('/message', {
  template: 'message',
  waitOn() {
    return Meteor.subscribe('message');
  }
});

