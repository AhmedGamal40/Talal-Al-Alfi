import React from "react";
import { useRouter } from "next/router";
import blog1 from "../../../../public/Assets/Images/blog1.png";
import blog2 from "../../../../public/Assets/Images/blog2.png";
import blog3 from "../../../../public/Assets/Images/blog3.png";
import blog4 from "../../../../public/Assets/Images/blog4.png";
import blog5 from "../../../../public/Assets/Images/blog5.png";
import blog6 from "../../../../public/Assets/Images/blog6.png";
import blog7 from "../../../../public/Assets/Images/blog7.png";
import blog8 from "../../../../public/Assets/Images/blog8.png";
import blog9 from "../../../../public/Assets/Images/blog9.png";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: blog1,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 2,
    image: blog2,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 3,
    image: blog3,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 4,
    image: blog4,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 5,
    image: blog5,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 6,
    image: blog6,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 7,
    image: blog7,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 8,
    image: blog8,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    id: 9,
    image: blog9,
    title: "Lorem ipsum dolor sit amet",
    name: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = data.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="py-4">
        <div className="rounded text-white bg-gray-700 py-1 px-2">
          {blog.name}
        </div>
        <div className="h-[288.75px] overflow-hidden my-4">
          <Image
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
        <p className="text-gray-700">{blog.desc}</p>
      </div>
    </div>
  );
};

export default BlogPost;
