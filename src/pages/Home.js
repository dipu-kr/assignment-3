import React, { useState } from "react";
import TopComponent from "../components/TopComponent";
import MiddleComponent from "../components/MiddleComponent";
import BottomComponent from "../components/BottomComponent";

const Home = () => {
  const [getCategory, setGetCategory] = useState("");
  const [getSize, setGetSize] = useState("");
  // console.log(getCategory);
  // console.log(getSize);

  return (
    <div>
      <TopComponent setGetCategory={setGetCategory} setGetSize={setGetSize} />
      <MiddleComponent />
      <BottomComponent getCategory={getCategory} getSize={getSize} />
    </div>
  );
};

export default Home;
