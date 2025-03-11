/**
 * ****************************
 * General info:
    url: https://jsonplaceholder.typicode.com
    Library: fetch
    slugs:
    GET	/posts
    9.1
        Please using PROMISE and then able to solve this
        a. Allow user to input an userid and postId, print out that post content: 
        Demonstrate the following steps:
            ===MENU===
            1. Get POST content 
            2. Print all related posts
            0. Exit!
            =========== 
        b. Print all posts for that user
 * ****************************
 */

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// function getPost(userId, postId) {
//   return fetch(`${BASE_URL}/posts/${postId}`)
//     .then((response) => response.json())
//     .then((post) => {
//       if (post.userId != userId) {
//         throw new Error("No data to show");
//       }
//       console.log("Post content::::", post);
//     })
//     .catch((error) => console.error(error.message));
// }

// function getAllPostsByUser(userId) {
//   return fetch(`${BASE_URL}/posts?userId=${userId}`)
//     .then((response) => response.json())
//     .then((posts) => {
//       console.log("All posts:::::", posts);
//     })
//     .catch((error) => console.error(error.message));
// }
// function showMenu() {
//   console.log(`
//          ===MENU===
//     1.Get POST content
//     2.Print all related posts
//     3.Exit
//     ==========================
//     `);
// }

// function main() {
//   showMenu();
//   readline.question("Choose an option: ", (option) => {
//     if (option === "0") {
//       console.log("Exiting!!!");
//       readline.close();
//     } else if (option === "1") {
//       readline.question("Please enter userId: ", (userId) => {
//         readline.question("Please enter postId: ", (postId) => {
//           getPost(userId, postId).then(() => main());
//         });
//       });
//     } else if (option === "2") {
//       readline.question("Please enter userId: ", (userId) => {
//         getAllPostsByUser(userId).then(() => main());
//       });
//     } else {
//       console.log("Invalid! Please try again");
//       main();
//     }
//   });
// }

// main();

/**
 * LOGIC
 * [
  {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
   ]

  Get a target post's content for user
  A. Check if user is existing
  1.Get all posts for user
  -- const allPosts = getAllPostFromUser(userId);
     const targetPostContent = filterPostContent(allPosts,targetPostId);
  2.Filter out the target post content
     if the postID is existing
        print out the post content
     else 
        the postID is not found
  B. Print out user is not found

 */

readline = require("readline-sync");
const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const userId = 1;
const targetPostId = 1;

function app() {
  let isPlaying = true;
  while (isPlaying) {
    handlePromise();
    break;
    function handlePromise() {
      if (!isPlaying) return;

      printAppMenu();
      getUserOption().then((userOption) => {
        switch (userOption) {
          case 1:
            // return getAllPostFromUser();
            return handleGetAllPostsFromUser();
          case 2:
            return handleGetPostsContent();

          case 0:
            isPlaying = false;
            console.log("Existing the app ... ");
            return Promise.resolve();

          default:
            console.log("Error!!");
            return Promise.resolve();
        }
      });
    }
  }
}

function getUserOption() {
  const userOption = Number(readline.question("Please select an option: "));
  resolve(userOption);
}

function getAllPostFromUser() {
  const userId = Number(readline.question("Enter UserId : "));
  return getAllPostFromUser(userId).then(function (allPosts) {
    s;
  });
}
function printAppMenu() {
  console.log(`
//          ===MENU===
//     1.Get POST content
//     2.Print all related posts
//     3.Exit
//     ==========================
//     `);
}

getAllPostFromUser(userId).then(function (allPosts) {
  //Synchronous start from here
  // console.log(allPosts);
  const targetPostContent = filterPostContent(allPosts, targetPostId);
  if (!targetPostContent) {
    console.log(`The post with id ${targetPostId} is not found!`);
  } else {
    console.log(targetPostContent);
  }
});

function getAllPostFromUser(userId) {
  return fetch(USER_ENDPOINT)
    .then(function (response) {
      return response.json();
    })
    .then(function (allUsers) {
      let hasUser = false;
      for (const user of allUsers) {
        if (user.id === userId) {
          hasUser = true;
          break;
        }
      }
      //check if user is existing
      if (hasUser) {
        return fetch(POST_ENDPOINT)
          .then(function (response) {
            return response.json();
          })
          .then(function (allPosts) {
            return allPosts.filter(function (post) {
              return post.userId === userId;
            });
          });
        // return allPosts;
      } else {
        console.log(`User with id ${userId} is not found`);
        process.exit(1);
      }
    });
}

function filterPostContent(allPosts, targetPostId) {
  const targetPost = allPosts.find(function (post) {
    return post.id === targetPostId;
  });
  return targetPost;
}
