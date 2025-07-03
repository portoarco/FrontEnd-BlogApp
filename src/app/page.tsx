// import Footer from "./components/Footer";
import { Badge } from "@/components/ui/badge";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Newscard from "./components/Newscard";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div
        id="blog-container"
        className="lg:mx-60 lg:my-2 m-3 min-h-screen "
      >
        <section id="headline" className="relative mt-5">
          {/* Headline Picturess */}
          <div id="headline-pic">
            <Image
              src="/headline.png"
              width={500}
              height={100}
              alt="headline-pic"
              className="w-full"
            ></Image>

            {/* Headline Description */}
            <div
              id="headline-desc"
              className="absolute bottom-0 text-white p-2 md:p-5 text-sm lg:text-2xl "
            >
              <Badge variant={"secondary"} className="">
                Technology
              </Badge>
              <p className="font-bold text-md md:text-3xl  my-2 ">
                The Impact of Technology on the Workplace : How Technology is
                Changing
              </p>
              <div id="headline-author" className="flex gap-x-3 items-center  ">
                <div id="author-profile" className="flex items-center gap-2   ">
                  <Image
                    src="/icon1.png"
                    width={10}
                    height={10}
                    alt="icon"
                    className=" md:size-8"
                  ></Image>
                  <p className="font-semibold text-[12px] md:text-lg">
                    Tracey Wilson
                  </p>
                </div>
                <div id="date" className="font-light text-[12px] lg:text-lg">
                  20 Januari 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="text-2xl font-bold my-8 text-center">Our Articles</p>

        <section id="news-list" className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-y-5 md:grid-cols-2 md:gap-x-5 ">
          
          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
            
          ></Newscard>
          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
          ></Newscard>

          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
          ></Newscard>

          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
          ></Newscard>

          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
          ></Newscard>

          <Newscard
            pictureSrc="/headline.png"
            badgeTitle="Technology"
            newsTitle="The Impact of Technology on the Workplace : How Technology is
                Changing"
            iconSrc="/icon2.png"
            name="Badarawuhi"
            date="20 Januari 2045"
          ></Newscard>
        </section>
      </div>

      {/* <Footer></Footer> */}

      <Footer></Footer>
    </>
  );
}
