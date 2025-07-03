"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookText,
  Eye,
  SearchCheckIcon,
  SquareArrowOutDownRight,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Tiptap from "../components/Tiptap";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "@/lib/redux/features/articlesSlice";

import { RootState } from "@/lib/redux/store";
import Newscard from "../components/Newscard";

interface IUser {
  objectId: number;
  fullname: string;
  email: string;
  password: string;
}

function DashboardPage() {
  // dispatch
  const dispatch = useDispatch();

  // state management
  const [newsTitle, setNewsTitle] = useState("");
  const [badgeTitle, setBadgeTitle] = useState("");
  const [leadArticle, setLeadArticle] = useState("");
  const [content, setContent] = useState("");
  const [pictureSrc, setPictureSrc] = useState("");
  const [thumbnailSrc, setThumbnailSrc] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");

  // ambil data artikel
  const articles = useSelector((state: RootState) => state.article.articles);

  // ambil nama dari login dengan localstorage
  useEffect(() => {
    const storedUser = localStorage.getItem("logInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUsername(parsedUser.fullname);
    }
  }, []);

  const [data, setData] = useState<IUser[]>([]);
  const router = useRouter();

  // fetching data (dengan fungsi fetch useEffect)
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://sharpwindow-us.backendless.app/api/data/accounts?pageSize=100",
          { method: "GET" }
        );
        const userData = await response.json();
        // console.log(data);
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  //   log out function
  function btnLogOut() {
    const confirmOut = confirm("Are You Sure?");
    if (confirmOut) {
      router.push("/");
    }
  }

  // function handle submit article button
  function handleSubmitArticle() {
    const today = new Date().toISOString().split("T")[0];

    dispatch(
      addArticle({
        newsTitle,
        badgeTitle,
        pictureSrc,
        thumbnailSrc,
        name: currentUsername || "",
        date: today,
        leadArticle,
        content,
      })
    );
    setNewsTitle("");
    setBadgeTitle("");
    setLeadArticle("");
    setContent("");
    setPictureSrc("");
    setThumbnailSrc("");
    alert("Artikel Berhasil Ditambahkan!");
  }

  return (
    <>
      {/* Sidebar Settings */}
      <section id="sidebar" className="fixed top-20 z-10">
        <SidebarProvider>
          <AppSidebar></AppSidebar>
          <main>
            <SidebarTrigger className="bg-black text-white"></SidebarTrigger>
          </main>
        </SidebarProvider>
      </section>
      <nav className=" flex justify-between items-center p-2 bg-[#acd5ff]">
        <div id="navbar-header">
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="navbar-logo"
            className="w-30 "
          ></Image>
        </div>
        <p className="text-xl font-bold uppercase ">Administrator Dashboard</p>
        <div
          id="navbar-profile"
          className="flex justify-between items-center gap-x-4"
        >
          <Button
            className="bg-red-600 hover:bg-red-800 cursor-pointer"
            onClick={btnLogOut}
          >
            Log Out
          </Button>
        </div>
      </nav>

      <div id="container" className="w-[95vw] mx-auto mt-5 h-960">
        <section id="content">
          <div
            id="content-header"
            className="flex justify-between align-middle"
          >
            {/* Total Articles */}
            <Card className=" bg-gradient-to-b from-sky-600 to-sky-300 shadow-md px-8 py-3">
              <CardHeader className="flex items-center justify-center gap-2 py-2">
                <div className="rounded-full border-black bg-white p-1 gap-3">
                  <BookText size={24}></BookText>
                </div>
                <p className="font-semibold text-2xl text-white">
                  Total Articles
                </p>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-x-2">
                <p className="font-bold text-4xl text-white">10</p>
                <p className="text-gray-200 text-sm"> has been published</p>
                <button type="submit" className="cursor-pointer">
                  <SquareArrowOutDownRight
                    size={12}
                    color="#ffff"
                  ></SquareArrowOutDownRight>
                </button>
              </CardContent>
            </Card>

            {/* Article Reviewed */}
            <Card className=" bg-gradient-to-b from-sky-600 to-sky-300 shadow-md px-6 py-3">
              <CardHeader className="flex items-center justify-between gap-2 py-2">
                <div className="rounded-full border-black bg-white p-1 gap-3">
                  <SearchCheckIcon size={24}></SearchCheckIcon>
                </div>
                <p className="font-semibold text-2xl text-white">
                  Total Reviewed
                </p>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-x-2">
                <p className="font-bold text-4xl text-white">1</p>
                <p className="text-gray-200 text-sm"> has been reviewed</p>
                <button type="submit" className="cursor-pointer">
                  <SquareArrowOutDownRight
                    size={12}
                    color="#ffff"
                  ></SquareArrowOutDownRight>
                </button>
              </CardContent>
            </Card>

            {/* Total Viewers */}
            <Card className=" bg-gradient-to-b from-sky-600 to-sky-300 shadow-md px-6 py-3">
              <CardHeader className="flex items-center justify-center gap-2 py-2">
                <div className="rounded-full border-black bg-white p-1 gap-3">
                  <Eye size={24}></Eye>
                </div>
                <p className="font-semibold text-2xl text-white">
                  Total Viewers
                </p>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-x-2">
                <p className="font-bold text-4xl text-white">998</p>
                <p className="text-gray-200 text-sm"> viewers</p>
                <button type="submit" className="cursor-pointer">
                  <SquareArrowOutDownRight
                    size={12}
                    color="#ffff"
                  ></SquareArrowOutDownRight>
                </button>
              </CardContent>
            </Card>

            {/* Total Account */}
            <Card className=" bg-gradient-to-b from-sky-600 to-sky-300 shadow-md px-6 py-3">
              <CardHeader className="flex items-center justify-center gap-2 py-2">
                <div className="rounded-full border-black bg-white p-1 gap-3">
                  <User size={24}></User>
                </div>
                <p className="font-semibold text-2xl text-white">
                  Total Account
                </p>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-x-2">
                <p className="font-bold text-4xl text-white">{data.length}</p>
                <p className="text-gray-200 text-sm"> Accounts Registered</p>
                <button type="submit" className="cursor-pointer">
                  <SquareArrowOutDownRight
                    size={12}
                    color="#ffff"
                  ></SquareArrowOutDownRight>
                </button>
              </CardContent>
            </Card>
          </div>
          <section id="create-article" className="mt-5">
            <p className="text-2xl font-semibold">Create New Article</p>
            {/* <div className="mt-3 grid grid-cols-3 gap-x-4 h-120"> */}
            <div id="new-article" className="border  rounded-sm p-3 shadow-lg">
              <label htmlFor="" className="">
                Judul Artikel
              </label>
              <Input
                placeholder="Masukkan Judul Artikel"
                onChange={(e) => setNewsTitle(e.target.value)}
              ></Input>
              <label>Select Category</label>
              <Select onValueChange={(value) => setBadgeTitle(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="cosmetics">Cosmetics</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <label htmlFor="">Lead Artikel</label>
              <Textarea
                placeholder="Masukkan Deskripsi Singkat Artikel"
                onChange={(e) => setLeadArticle(e.target.value)}
              ></Textarea>
              <label>Isi Berita</label>
              <Tiptap onChange={setContent}></Tiptap>
              <div className="flex gap-x-5 items-center mt-5 p-2">
                <label>Upload Gambar Headline:</label>
                <Input
                  type="file"
                  id="article-picture"
                  className="w-80 cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setPictureSrc(URL.createObjectURL(file));
                    }
                  }}
                ></Input>
                <label>Thumbnail Picture:</label>
                <Input
                  type="file"
                  id="article-thumbnail"
                  className="w-80 cursor-pointer"
                  onChange={(e) => {
                    const thumbnail = e.target.files?.[0];
                    if (thumbnail) {
                      setThumbnailSrc(URL.createObjectURL(thumbnail));
                    }
                  }}
                ></Input>
              </div>
              <Button
                type="button"
                className="cursor-pointer"
                onClick={() => handleSubmitArticle()}
              >
                Submit Article
              </Button>
            </div>
            {/* </div> */}
          </section>

          <section id="article-list" className="mt-10">
            <p className="text-2xl font-semibold mb-4">Manage Articles</p>

            {articles.length === 0 ? (
              <p className="text-gray-500 italic">
                {" "}
                Belum ada artikel yang ditambahkan{" "}
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-x-2">
                {articles.map((article, index) => (
                  <Card key={index} className="p-2">
                    <Newscard
                      pictureSrc={article.pictureSrc}
                      badgeTitle={article.badgeTitle}
                      newsTitle={article.newsTitle}
                      iconSrc="/icon2.png"
                      name={article.name}
                      date={article.date}
                    ></Newscard>
                  </Card>
                ))}
              </div>
            )}

            {/* {articles.length === 0 ? (
              <p className="text-gray-400 italic">
                Belum ada artikel yang ditambahkan.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-5">
                {articles.map((article, index) => (
                  <Card key={index} className="shadow-md">
                    <CardHeader>
                      <h2 className="text-lg font-bold">{article.newsTitle}</h2>
                      <p className="text-sm text-gray-500">
                        {article.date} by {article.name}
                      </p>
                      <span className="text-xs text-blue-700 uppercase">
                        {article.badgeTitle}
                      </span>
                    </CardHeader>
                    <CardContent>
                      {article.thumbnailSrc && (
                        <img
                          src={article.thumbnailSrc}
                          alt="thumbnail"
                          className="w-full h-40 object-cover rounded mb-2"
                        />
                      )}
                      <p className="text-sm">{article.leadArticle}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )} */}
          </section>

          <section id="account-list"></section>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
