'use strict';

Template.messageForm.onCreated(function () {
  FormHandler.add(this, {
    debug: true,
    schema: Schemas.Message,
    load() {
      return this.id ? Message.collection.findOne(this.id) : {};
    },
    beforeValidate(modifier) {
      var doc = modifier.$set;
      var user = Meteor.user();
      doc.owner_id = user._id;
      doc.owner_name = user.profile.name;
    },
    save(parsedDoc, modifier) {
      if (this.id) {
        Message.collection.update(this.id, modifier);
        var editMode = Session.get('editMode');
        Session.set('editMode', _.without(editMode, this.id));
      } else {
        Message.collection.insert(modifier.$set);
        Session.set('newMessageForm', false);
      }
    }
  });
});

Template.messageForm.events({
  'click .cancel'(event, template) {
    if (this.id) {
      var editMode = Session.get('editMode');
      Session.set('editMode', _.without(editMode, this.id));
    } else {
      Session.set('newMessageForm', false);
    }
  }
});
