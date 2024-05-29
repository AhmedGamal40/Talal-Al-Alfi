import Image from "next/image";
import Communication from "./Components/Layout/Communication";
import AlfiLegal from "./Components/Home/alfiLegal";
import VideoGallery from "./Components/Home/VideoGallery";
import FormContact from "./Components/Home/formContact";
import Expertise from "./Components/Home/Expertise";
export default function Home() {
  return (
    <>
    <AlfiLegal />
    <Communication />
    <Expertise />
    <VideoGallery />
    <FormContact />
    </>
  );
}
