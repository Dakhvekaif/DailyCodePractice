function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Kaif", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching User Data...");
    const userData = await fetchUserData();
    console.log("user Data fetched successfully");

    console.log("User Data : ", userData);
  } catch (error) {
    console.log("Error Fetching Data : ", error);
  }
}

// getUserData();

function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}
function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog data...");
    const [blogData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commentData);

    console.log("Fetch completed");
  } catch (error) {
    console.log("Error fetching Blog data", error);
  }
}

getBlogData();
