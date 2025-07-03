"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";

interface IUser {
  objectId?: number;
  fullname: string;
  email: string;
  password: string;
}

function SignupPage() {
  // store data
  const [data, setData] = useState<IUser[]>([]);
  console.log(data); //debugging
  // routing button
  const router = useRouter();

  // get data from input element
  const inFullname = useRef<HTMLInputElement>(null);
  const inEmail = useRef<HTMLInputElement>(null);
  const inPassword = useRef<HTMLInputElement>(null);

  // validasi email
  const validateEmail = (newUser: IUser) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(newUser.email);
  };

  // isi data saat klik submit form
  async function onBtSubmit() {
    try {
      // fetching data
      fetch("https://sharpwindow-us.backendless.app/api/data/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inEmail.current?.value,
          fullname: inFullname.current?.value,
          password: inPassword.current?.value,
        }),
      });

      if (
        inFullname.current?.value === "" ||
        inEmail.current?.value === "" ||
        inPassword.current?.value === ""
      ) {
        alert("Data harus diisi!");
      } else {
        const newUser: IUser = {
          // objectId: Date.now(),
          fullname: inFullname.current?.value || "",
          email: inEmail.current?.value || "",
          password: inPassword.current?.value || "",
        };
        if (validateEmail(newUser)) {
          setData((listUser) => [...listUser, newUser]);
          if (inFullname.current) inFullname.current.value = "";
          if (inEmail.current) inEmail.current.value = "";
          if (inPassword.current) inPassword.current.value = "";

          alert("Selamat! ✅ Data Anda Berhasil Terdaftar");

          router.push("/signin");
        } else if (!validateEmail(newUser)) {
          alert("Email anda invalid");
        }
      }

      // clear input supaya bisa diisi ulang
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-[50vw] p-5">
          <CardContent>
            <p className="text-3xl font-bold text-center">Sign Up</p>
            <label>Fullname</label>
            <Input
              type="text"
              required
              ref={inFullname}
              placeholder="Masukkan Nama Lengkap Anda"
            ></Input>
            <label>Email:</label>
            <Input
              type="email"
              required
              ref={inEmail}
              placeholder="Masukkan Email Anda"
            ></Input>
            <label>Password:</label>
            <Input
              type="password"
              required
              ref={inPassword}
              placeholder="Masukkan Password Anda"
            ></Input>
          </CardContent>

          {/* Submit Button */}
          <div className="flex justify-center gap-5 mt-4">
            <Button
              type="button"
              className="w-[10em] cursor-pointer"
              onClick={onBtSubmit}
            >
              Sign Up
            </Button>
            <Button
              type="button"
              className="w-[10em] bg-green-600 hover:bg-green-700 cursor-pointer"
              onClick={() => router.push("/signin")}
            >
              Sign In
            </Button>
            <Button
              type="button"
              className="w-[13em] bg-blue-600 hover:bg-blue-800 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Back to Homepage
              <HomeIcon size={10}></HomeIcon>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SignupPage;
