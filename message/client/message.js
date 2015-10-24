Template.message.helpers({
  messages() {
    return Message.collection.find();
  }
});

Template.message.events({
  'click #remove'() {
    Message.collection.remove(this._id);
  }
});

Template.messageForm.events({
  'click #post'(event, template) {
    var user = Meteor.user();

    Message.collection.insert({
      title: template.$('#message').val(),
      owner_id: user._id,
      owner_name: user.profile.name,
      desc: template.$('#desc').val()
    });
  }
});
