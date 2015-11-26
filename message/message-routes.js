'use strict';

Router.route('/message', {
  data: {},
  template: 'message',
  waitOn() {
    return Meteor.subscribe('message');
  }
});

