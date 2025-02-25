const RequestHandler = require("./RequestHandler");

let userId = 1;
let postId = 1;
const BASE_URL = "https://jsonplaceholder.typicode.com";

main();

//init controller
async function main() {
  const requestHandler = new RequestHandler(BASE_URL);
  const post = await requestHandler.getTargetPost(userId, postId);
  const allPosts = await requestHandler.getAllPosts(userId);

  //print target Post content

  if (!post) {
    console.log(
      `The post with id ${postId} does not exist for the user with id ${userId}`
    );
  } else {
    _printPostContent(post);
  }

  //print all posts content
  if (allPosts.length === 0) {
    console.log(`There is no post for the user with id: ${userId}`);
  } else {
    console.log("All posts content");
    for (const post of allPosts) {
      _printPostContent(post);
    }
  }
}

function _printPostContent(post) {
  const { userId, id, title, body } = post;
  console.log("Post Content");
  console.log(`userId: ${userId}`);
  console.log(`id: ${id}`);
  console.log(`title: ${title}`);
  console.log(`body: ${body}`);
}
