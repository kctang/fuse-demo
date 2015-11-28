Template.message.onCreated(function () {
  Session.set('editMode', []);
});

Template.message.helpers({
  messages() {
    return Message.collection.find();
  },
  formVisible() {
    return Session.get('newMessageForm')
  },
  editMode() {
    var editMode = Session.get('editMode');
    return editMode.indexOf(this._id) != -1;
  },
  search() {
    return Session.get('search');
  }
});

Template.message.events({
  mdlUiFab() {
    Session.set('newMessageForm', true);
  },

  'click .remove'() {
    Message.collection.remove(this._id);
  },

  'click .edit'() {
    var editMode = Session.get('editMode');
    editMode.push(this._id);
    Session.set('editMode', _.uniq(editMode));
  }
});
