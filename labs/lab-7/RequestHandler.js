const Post = require("./Post");

class RequestHandler {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async getTargetPost(targetUserId, postId) {
    //0. whether that user exists-> keep wait until lesson try...catch
    //1. send GET request on to posts - >[{}]
    /**
     * 2.Filter out the post for target targetUserId
     * .filter(function(post){
     *    return post.targetUserId === targetUserId
     * }) -> targetUserPosts = [{userId:1,...}]
     */
    const targetUserPosts = await this._getAllPosts(targetUserId);
    const targetPost = targetUserPosts.find(function (post) {
      return post.id === postId;
    });

    if (!targetPost) {
      return new Post();
    }

    const { userId, id, title, body } = targetPost;
    return new Post(userId, id, title, body);
    /**
     * 3.Filter out the target post
     * targetUserPosts.find(function(post){
     * return post.postId === postId;
     * }) -> targetPost = {} -> return
     */
  }

  async getAllPosts(targetUserId, postId) {
    const allPost = [];
    const targetUserPost = await this._getAllPosts(targetUserId);
    for (const post of targetUserPost) {
      const { userId, id, title, body } = post;
      allPost.push(new Post(userId, id, title, body));
    }
    return allPost;
  }

  async _getAllPosts(userId) {
    const postEndpoint = `${this._baseUrl}/posts`;
    const response = await fetch(postEndpoint);
    const allPosts = await response.json();
    return allPosts.filter(function (post) {
      return post.userId === userId;
    });
  }

  async printPostContent(post) {
    const { userId, id, title, body } = post;
    console.log("Post Content");
    console.log(`userId: ${userId}`);
    console.log(`id: ${id}`);
    console.log(`title: ${title}`);
    console.log(`body: ${body}`);
  }
}
module.exports = RequestHandler;
