import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_urls[0]);
        // console.log(data.image_urls);
      })
      .catch((error) => console.error(error));
  }, [latestPost]); //it will change every time the image is changed

  return (
    <div>
      <img src={latestPost} alt="latest post" className="latest-image" />
    </div>
  );
}

export default LatestImage;
