
import Button from "@/app/components/button";
import Image from "next/image";
import thumb from "@/public/images/thumb.jpg"
import React from "react";

const Misssion = () => {
  return (
    <main>
      <div className="mt-10"> Misssion Page</div>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div className="w-[400px]">
        <Image placeholder="blur" src={thumb} alt="thumb image" />
      </div>
      <Button />
    </main>
  );
};

export default Misssion;
