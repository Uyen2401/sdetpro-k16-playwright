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

async function getPost(userId, postId) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    const post = await response.json();
    if (post.userId != userId) {
      throw new Error("No data to show");
    }
    console.log("Post content::::", post);
  } catch (error) {
    console.error(error.message);
  }
}

async function getAllPostsByUser(userId) {
  try {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    const posts = await response.json();
    console.log("All posts:::::", posts);
  } catch (error) {
    console.error(error.message);
  }
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
  readline.question("Choose an option: ", async (option) => {
    if (option === "0") {
      console.log("Exiting!!!");
      readline.close();
      return;
    } else if (option === "1") {
      readline.question("Please enter userId: ", async (userId) => {
        readline.question("Please enter postId: ", async (postId) => {
          await getPost(userId, postId);
          main();
        });
      });
    } else if (option === "2") {
      readline.question("Please enter userId: ", async (userId) => {
        await getAllPostsByUser(userId);
        main();
      });
    } else {
      console.log("Invalid! Please try again");
      main();
    }
  });
}

main();
