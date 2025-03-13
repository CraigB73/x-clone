import Link from "next/link";
import React from "react";
import Image from "./Image";
const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Message",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Community",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-6">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xl:items-start">
        {/* LOGO */}
        <Link href="/">
          <Image path="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>

        {/* MENU LIST*/}
        <div className="flex flex-col text-[#c3c6c9] gap-2">
          {menuList.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex p-2 rounded-full hover:bg-[#181818] gap-4"
            >
              <Image path={`icons/${item.icon}`} alt="logo" w={24} h={24} />
              <span className="hidden xl:inline">{item.name}</span>
            </Link>
          ))}
          {/* Button */}
          <Link href="/">
            <Image
              className="xl:hidden fil-[#fff]"
              path="icons/post.svg"
              alt="nav button"
              w={24}
              h={24}
            />
          </Link>
          <Link
            href="/"
            className=" hidden xl:block bg-white rounded-full text-center"
          >
            <span className="text-black font-semibold">Post</span>
          </Link>
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="/images/avatar.png"
              alt="dog with glasses"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="font-bold">EYEROCK</span>
            <span className="text-sm text-gray-300">@rockweb</span>
          </div>
        </div>
        <div className="hidden xl:block cursor-poiner font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
