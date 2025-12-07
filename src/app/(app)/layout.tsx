"use client";

import ContextMenuItems from "@/components/context-menu";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { useEducationStore } from "@/lib/zustand/useEducationStore";
import { useExperienceStore } from "@/lib/zustand/useExperienceStore";
import { useProjectStore } from "@/lib/zustand/useProjectStore";
import { useTechStackStore } from "@/lib/zustand/useTechStack";
import { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const [showSplash, setShowSplash] = useState<boolean>(true);

  // const handleSplashClick = () => setShowSplash(false);

  const { fetch: fetchProjectData } = useProjectStore();
  const { fetch: fetchExperienceData } = useExperienceStore();
  const { fetch: fetchTechStackData } = useTechStackStore();
  const { fetch: fetchEducationData } = useEducationStore();

  useEffect(() => {
    fetchProjectData();
    fetchExperienceData();
    fetchTechStackData();
    fetchEducationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background relative z-10 flex min-h-screen flex-col">
      <ContextMenu>
        <ContextMenuTrigger>
          {/* Main content is always rendered */}
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ContextMenuTrigger>
        <ContextMenuItems />
      </ContextMenu>

      {/* Splash overlay */}
      {/* {showSplash && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer bg-black/30 backdrop-blur-md transition-opacity duration-500"
          onClick={handleSplashClick}
        >
          <AppleHelloEnglishEffect speed={1} className="text-6xl md:text-9xl" />
        </div>
      )} */}
    </div>
  );
}