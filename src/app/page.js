import Image from "next/image";
import AlfiLegal from "./Components/Home/alfiLegal";
import VideoGallery from "./Components/Home/VideoGallery";
import FormContact from "./Components/Home/formContact";
import Expertise from "./Components/Home/Expertise";
import coverImage from "../../public/Assets/Images/cover.png";
export default function Home() {
  return (
    <>
    <div className="relative w-full h-full">
    <Image
      src={coverImage}
      alt="Cover Image"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="z-0"
    />
    <div className="relative z-10">
      <AlfiLegal />
      <Expertise />
      <VideoGallery />
      <FormContact />
    </div>
    </div>
    </>
  );
}
