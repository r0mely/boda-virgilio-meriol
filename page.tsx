"use client";

import { useState } from "react";
import Envelope from "@/components/Envelope";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import Details from "@/components/Details";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative">
      <Envelope onOpen={() => setOpened(true)} />
      <MusicPlayer startSignal={opened} />

      {opened && (
        <>
          <Hero />
          <Countdown />
          <Story />
          <Gallery />
          <MapSection />
          <Details />
          <RSVPSection />
          <Footer />
        </>
      )}
    </main>
  );
}
