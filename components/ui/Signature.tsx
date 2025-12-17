import Image from "next/image";

const Signature = () => {
  return (
    <Image
      src="/signature.png" // Replace with your image path
      alt="Signature of Pradip Chaudhary"
      className="my-6"
      width={121} // Set desired width
      height={65} // Set desired height
    />
  );
};

export default Signature;
