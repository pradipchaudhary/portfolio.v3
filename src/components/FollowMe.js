import Image from "next/image";
import FollowMeImg from "../../public/follow-me.png";

// Social Icons
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";

const FollowMe = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "8%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${FollowMeImg.src})`,
          width: 175,
          height: 40,
        }}
      />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <a href="https://github.com/pradipchaudhary">
          <Image src={Github} alt="" width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/pradipchaudhary/">
          <Image src={Linkedin} alt="" width={22} height={22} />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
