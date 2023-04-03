import React from "react";
import Banner from "../Components/banner";
import About from "../Components/about";
import Work from "../Components/work";
import Technology from "../Components/technology";
import SEO from "../Components/seo";

const Home = () => {
  return (
    <div className="bg-bck_color mx-auto pb-[5rem]">
      <SEO
        name={"C_edar_"}
        title={`Cedar - Web Developer and Graphic Designer`}
        description={
          "Hi, nice to meet you. I am a Freelance Web Developer and Graphic Designer.Let's Chat."
        }
        imgurl={process.env.PUBLIC_URL + "/assets/aboutimg-mobile.png"}
        imgalt={"A handsome guy smiling ;)"}
        url={"https://cedar.readate.org"}
      />
      <Banner />
      <Technology />
      <About />
      <Work />
    </div>
  );
};

export default Home;
