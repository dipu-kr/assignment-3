import React, { useState } from "react";
import TopComponent from "../components/TopComponent";
import MiddleComponent from "../components/MiddleComponent";
import BottomComponent from "../components/BottomComponent";

const Home = () => {
  const [getCategory, setGetCategory] = useState("");
  const [getSize, setGetSize] = useState("");

  return (
    <div>
      <TopComponent
        getCategory={getCategory}
        setGetCategory={setGetCategory}
        getSize={getSize}
        setGetSize={setGetSize}
      />
      <MiddleComponent />
      <BottomComponent getCategory={getCategory} getSize={getSize} />
    </div>
  );
};

export default Home;
