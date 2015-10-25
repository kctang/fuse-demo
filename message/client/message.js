Template.message.helpers({
  messages: ()=> Message.collection.find(),
  formVisible: ()=> Session.get('formVisible')
});

Template.message.events({
  mdlUiFab() {
    Session.set('formVisible', true);
  },

  'click .remove'() {
    Message.collection.remove(this._id);
  }
});

Template.messageForm.events({
  'click .cancel'(event, template) {
    Session.set('formVisible', false);
  },
  'click .post'(event, template) {
    var user = Meteor.user();

    Message.collection.insert({
      title: template.$('#title').val(),
      owner_id: user._id,
      owner_name: user.profile.name,
      desc: template.$('#desc').val()
    });

    Session.set('formVisible', false);
  }
});
