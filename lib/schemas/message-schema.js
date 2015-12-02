Schemas = {};

Schemas.Message = new SimpleSchema([
    Fuse.Schemas.Owner,
    Fuse.Schemas.Timestamp,
    Fuse.Schemas.TitleDesc,
    Fuse.Schemas.Hashtag
]);
