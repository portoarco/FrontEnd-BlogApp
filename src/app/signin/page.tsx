"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function SigninPage() {
  const router = useRouter();
  const inEmail = useRef<HTMLInputElement>(null);
  const inPassword = useRef<HTMLInputElement>(null);

  async function btnSignIn() {
    const email = inEmail.current?.value;
    const password = inPassword.current?.value;

    // cek input email dan password apa sudah terisi
    if (!email || !password) {
      alert("Email atau Password harus diisi");
      return;
    }

    // akses data backend
    try {
      // fetching data
      const response = await fetch(
        // "https://sharpwindow-us.backendless.app/api/data/accounts",
        "https://sharpwindow-us.backendless.app/api/data/accounts?pageSize=100",
        { method: "GET" }
      );
      const usersData = await response.json();
      console.log(usersData);
      // conditional checking

      //   default value autentikasi
      let isAuthenticated = false;

      //   akses data

      usersData.forEach(
        (user: { email: string; password: string; fullname: string }) => {
          if (user.email === email && user.password === password) {
            isAuthenticated = true;
            localStorage.setItem("logInUser", JSON.stringify(user)); 
          }
        }
      );

      // validation and routing
      if (isAuthenticated) {
        router.push("/dashboard");
      } else {
        alert("Email atau password salah/belum terdaftar");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-[50vw] p-5">
          <CardContent>
            <p className="text-3xl font-bold text-center">Sign In</p>
            <label>Email:</label>
            <Input
              type="email"
              required
              placeholder="Masukkan Email Anda"
              ref={inEmail}
            ></Input>
            <label>Password:</label>
            <Input
              type="password"
              required
              placeholder="Masukkan Password Anda"
              ref={inPassword}
            ></Input>
            <p className="text-sm  mt-2 select-none">
              Not yet Registered?
              <Link href="/signup" className="font-bold text-gray-600">
                {" "}
                Sign Up
              </Link>
            </p>
          </CardContent>

          {/* Submit Button */}
          <div className="flex justify-center gap-5 mt-5">
            <Button
              type="button"
              className="w-[10em] cursor-pointer"
              onClick={btnSignIn}
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

export default SigninPage;
