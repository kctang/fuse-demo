Message = Fuse.Module('message', {
  publish: {
    active: true,
    selector: function (arguments) {
      // publish everything
      return {};
    },
    findOptions: {
      sort: [
        ['title', 'asc']
      ]
    }
  }
});
