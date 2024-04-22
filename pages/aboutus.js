import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Samridhi Parajuli",
      position: "B.Tech(Computer Science and Engineering)",
      images: images.samridhi,
    },
    {
      name: "Prajwal Luitel",
      position: "B.Tech(Computer Science and Engineering)",
      images: images.prajwal,
    },
    {
      name: "Aayush Parajuli",
      position: "B.Tech(Computer Science and Engineering)",
      images: images.aayush,
    },
  ];


  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About FlameOn</h1>
            <p>
              We've developed this project as our capstone project at the final
              year of our study at the Vellore Institute of Technology.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Developers</h2>
          <p>
            We are a group of dreamers; and we put a lot of hard work and effort
            to achieve them.
                  </p>
                  
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={300}
                  height={300}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                    <p>{el.position}</p>
                    <p>VIT University, Vellore</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
