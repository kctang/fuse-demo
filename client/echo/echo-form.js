'use strict';

Template.echoForm.onCreated(function () {
  FormHandler.add(this, {
    debug: true,
    beforeValidate(modifier) {
      console.log('--- beforeValidate()');
    },
    validate(modifier) {
      // custom validation...
      var errors = {};

      if (modifier.$set.title === '') {
        errors.title = {
          message: 'Type something in title...'
        };
      }

      return errors;
    },
    save(parsedDoc, modifier) {
      console.log('--- save()');
      console.log(parsedDoc);
      console.log(modifier);
    }
  });
});

