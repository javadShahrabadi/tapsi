import React from "react";
import Image from "next/image";
// --------------------

const FooterImgCart = (props) => {
  return (
    <div className="bg-white p-2 rounded-md ml-2 cursor-pointer">
      <Image src={props.image} alt={props.alt} width={114} height={119} />
    </div>
  );
};

export default FooterImgCart;
