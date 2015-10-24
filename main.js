'use strict';

Router.configure({
  layoutTemplate: 'demoLayout'
});

Router.route('/', {
  template: 'home'
});

Message.init();
Fuse.SecurityService.init();
