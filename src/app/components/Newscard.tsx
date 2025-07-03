import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
interface INewscard {
  pictureSrc: string;
  newsTitle: string;
  badgeTitle: string;
  iconSrc: string;
  name: string;
  date: string;
}

function Newscard(props: INewscard) {
  return (
    <>
      <div className="rounded-md lg:p-3 max-lg:p-3 shadow-md shadow-[#97989f56] ">

        <div className=" flex items-center gap-3 lg:flex-col">
          <Image
            src={props.pictureSrc}
            width={100}
            height={50}
            alt="news-picture"
            className="lg:w-xl rounded-lg w-[5em] h-[5em] lg:h-auto "
          ></Image>
          <Badge className="mt-5 hidden ">{props.badgeTitle}</Badge>
          <p
            id="card-title"
            className="mt-2 lg:text-xl font-medium text-md leading-6 md:text-xl "
          >
            {props.newsTitle}
          </p>
        </div>


        <div className="flex flex-col mt-5 gap-y-2 justify-between ">
          <Badge className="text-[#4B6BFB] bg-[#c2cdff]">{props.badgeTitle}</Badge>
          <div className="flex justify-between max-sm:text-sm md:flex-col ">
          <p className="text-[#97989F] font-medium">Author:{props.name}</p>
          <p className="text-[#97989F]">{props.date}</p>
          </div>
          <Button className="" variant={"secondary"}>
            <p>Show Details</p>
            <ExternalLink></ExternalLink>
          </Button>
        </div>

        
      </div>
    </>
  );
}

export default Newscard;
