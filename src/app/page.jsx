"use client";
import Info from "@/components/Info";
import backgroundImage from "../../public/background.jpg";
import LetsWorkTogetherButton from "@/components/LetsWorkTogetherButton";
import PradipChaudharyLogo from "@/components/PradipChaudharyLogo";
import FollowMe from "@/components/FollowMe";
const Homepage = () => {
  return (
    <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PradipChaudharyLogo />
      <Info />
      <LetsWorkTogetherButton />
      <FollowMe />
    </div>
  );
};

export default Homepage;
