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

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const BASE_URL = "https://jsonplaceholder.typicode.com";

function getPost(userId, postId) {
  return fetch(`${BASE_URL}/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      if (post.userId != userId) {
        throw new Error("No data to show");
      }
      console.log("Post content::::", post);
    })
    .catch((error) => console.error(error.message));
}

function getAllPostsByUser(userId) {
  return fetch(`${BASE_URL}/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((posts) => {
      console.log("All posts:::::", posts);
    })
    .catch((error) => console.error(error.message));
}
function showMenu() {
  console.log(`
         ===MENU===
    1.Get POST content
    2.Print all related posts
    3.Exit
    ==========================
    `);
}

function main() {
  showMenu();
  readline.question("Choose an option: ", (option) => {
    if (option === "0") {
      console.log("Exiting!!!");
      readline.close();
    } else if (option === "1") {
      readline.question("Please enter userId: ", (userId) => {
        readline.question("Please enter postId: ", (postId) => {
          getPost(userId, postId).then(() => main());
        });
      });
    } else if (option === "2") {
      readline.question("Please enter userId: ", (userId) => {
        getAllPostsByUser(userId).then(() => main());
      });
    } else {
      console.log("Invalid! Please try again");
      main();
    }
  });
}

main();
