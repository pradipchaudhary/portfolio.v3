import pradipchaudharyLogo from "../../public/pradipchaudhary.png";

const PradipChaudharyLogo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pradipchaudharyLogo.src})`,
        position: "absolute",
        top: "2%",
        left: "50%",
        width: 500,
        height: 150,
        transform: "translateX(-50%)",
      }}
    />
  );
};

export default PradipChaudharyLogo;
