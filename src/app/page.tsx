import Image from "@/components/Image";
import React from "react";

export default function Post() {
  return (
    <div className="flex flex-col items-center">
      <h1>Center Post Section</h1>
      <div className="relative w-[500] h-[300]">
        <Image path="images/post.jpeg" w={500} h={300} alt="test image" />
      </div>
    </div>
  );
}
