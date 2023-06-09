import { AppContext } from "../App";
import React, { useContext } from "react";

function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(); // because we are not sending raw json we are sending a form data object
    data.append("post[title]", event.target.title.value);
    // data.append("post[image]", event.target.image.files[0]);

    console.log(event.target.images.files);

    for (let i = 0; i < event.target.images.files.length; i++) {
      data.append(
        "post[images][]",
        event.target.images.files[i],
        event.target.images.files[i].name
      );
    }

       submitToAPI(data);
  }
  function submitToAPI(data) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_urls[0]);
        console.log(data.image_urls[0]);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" multiple name="images" id="images" />
        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default FileForm;
