```js
userId = 1;
postId = 1;

const requestHandler = new RequestHandler(BASE_URL);
const post = await postHandler.printTargetPost(userId,postId);
const allPosts = await postHandler.printAllPost(userId,postId);
```
