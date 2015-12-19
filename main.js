'use strict';

Router.configure({
  layoutTemplate: 'mdlUiAppLayout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/echo-form', {
  data: {},
  template: 'echoForm'
});

MdlUi.configure({
  title: 'Demo Application',

  publicDrawer: 'appDrawerPublic',
  drawer: 'appDrawer',

  search: true
});

Fuse.SecurityService.init();
MdlUi.init();
Message.init();
