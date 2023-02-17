import { AppContext } from "../App";
import React, { useContext } from "react";

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event){

  }

  function submitToAPI(data){
    
  }
  return (<div>
    <h1>

    LatestImage

    </h1>


  </div>);
}

export default LatestImage;
