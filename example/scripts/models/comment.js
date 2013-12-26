angular.module('app')
  .provider('Comment', function() {
    this.$get = ['ActiveResource',
      function(ActiveResource) {

      function Comment(data) {
        this.body = data.body;
        this.belongsTo('post');

        this.validates({
          body: { presence: true, length: { in: _.range(1, 140) } }
        });
      };

      Comment = ActiveResource.Base.apply(Comment);
      Comment.primaryKey    = "_id";
      Comment.api.set('http://0.0.0:3000/api');
      Comment.api.createURL = 'http://0.0.0:3000/api/comment';

      return Comment;
    }];
  });
