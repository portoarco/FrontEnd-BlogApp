import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div
        id="footer-container"
        className="bg-[#ebedf6]  w-full mt-10 px-2 py-5 sm:p-10 sm:flex sm:flex-col relative "
      >
        <div className="sm:flex sm:justify-between flex justify-between lg:flex-col">
          <div id="quick-link">
            <p className="font-bold text-xl ">Quick Link</p>
            <ul className="flex gap-x-3">
              <li>Home</li>
              <li>About</li>
              <li>Author</li>
            </ul>
          </div>

          <div id="category" className="mx-10 lg:mx-0 lg:my-5">
            <p className="font-bold text-xl sm:text-center lg:text-start">
              Category
            </p>
            <ul className="flex flex-col sm:flex-row sm:gap-3 lg:flex-col">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Sports</li>
            </ul>
          </div>
        </div>

        <div id="weekly-news" className="my-5 sm:w-[50vw] md:mx-auto lg:absolute lg:right-30">
          <form>
            <Card className="text-center p-5">
              <CardContent className="">
                <p className="text-2xl text-center font-bold">
                  Weekly Newsletter
                </p>
                <p className="text-center text-[#97989F] font-light">
                  Get blog articles and offers via email
                </p>
                <Input className="my-4 " type="email"></Input>
                <Button type="button" className="bg-blue-700 text-white hover:bg-blue-500 hover:shadow-lg cursor-pointer">Submit</Button>
              </CardContent>
            </Card>
          </form>
        </div>
        <Image
          src="/logo.svg"
          width={100}
          height={50}
          alt="footer-logo"
          className="sm:w-[10em] mt-8"
        ></Image>
        <p>Created by Arco - 2024</p>
      </div>
    </>
  );
}

export default Footer;
