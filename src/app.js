import { http } from "./http";
import { ui } from "./ui";

//  Get posts on DOM loader
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPosts);

// Get Posts
function getPosts() {
  http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// Add post
function submitPosts() {
  // get title and body of the post from the input fields
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  // Post validation
  if(title === "" || body === "") {
    // throw an error
    ui.showAlert("The post must contain title and body", "alert alert-danger");
  } else {
    // create a new post object
    const data = {
      title,
      body
    }

    http.post("http://localhost:3000/posts", data)
      .then(res => {
        ui.showAlert("Post added successfully", "alert alert-success");
        // clear input fields
        ui.clearFields();
        getPosts();
      })
      .catch(err => {
        console.log(err);
        ui.showAlert("Error while posting", "alert alert-danger");
      });
  }
  
}