Template.message.onCreated(function () {
  Session.set('editMode', []);
});

Template.message.helpers({
  messages() {
    var selector = {};
    var q = Session.get('search');
    if (q) {
      var escapedQ = escapeRegExp(q);
      selector = {
        $or: [
          {tags: q},
          {title: {$regex: escapedQ, $options: 'i'}},
          {desc: {$regex: escapedQ, $options: 'i'}}
        ]
      };
    }

    return Message.collection.find(selector, {
      sort: [
        ['title', 'asc']
      ]
    });

    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
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
  },
  updatedAt() {
    return moment(this.updatedAt).fromNow();
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
