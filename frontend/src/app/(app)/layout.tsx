"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AppleHelloEnglishEffect } from "@/components/ui/hello-effect";
import Image from "next/image";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const handleSplashClick = () => setShowSplash(false);

  return (
    <div className="bg-background relative z-10 flex min-h-screen flex-col">
      {/* Main content is always rendered */}
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />

      {/* Splash overlay */}
      {showSplash && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-black/30 backdrop-blur-md transition-opacity duration-500"
          onClick={handleSplashClick}
        >
          <AppleHelloEnglishEffect speed={1} className="text-6xl md:text-9xl" />
        </div>
      )}
    </div>
  );
}