'use strict';

Router.configure({
  layoutTemplate: 'mdlUiAppLayout'
});

Router.route('/', {
  name: 'home',
  template: 'home'
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
