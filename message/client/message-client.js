Message = Fuse.Module('message', {
  subscribe: {
    active: true,
    arguments: function () {
      return {
        // subscribe everything
        // TODO: demo subscribe to subset of published records
      };
    }
  }
});
