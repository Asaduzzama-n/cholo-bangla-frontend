import Carousel from "@/components/ui/carousel/Carousel";

import "../components/ui/CardCarousel/embla.css";
import FeaturedSection from "@/components/ui/FeaturedSection";
import TrendingSection from "@/components/ui/TrendingSection";
import InfoGraph from "@/components/ui/InfoGraph";

const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="md:flex justify-around  w-full p-5">
        <div className=" md:w-1/2 flex justify-center items-center ">
          <p className="font-semibold text-xl">
            Welcome to{" "}
            <span className="bg-primary text-secondary px-2 rounded-md">
              CHOLO-BANGLA
            </span>
            , your ultimate gateway to unforgettable adventures! On our
            platform, a diverse array of travel agencies showcase their unique
            events and packages, ensuring you have a wide selection of trusted,
            high-quality options. Join the countless travelers who rely on us
            for seamless, memorable journeys. Discover, book, and explore with
            confidence on TravelHub.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:mr-20">
          <Carousel></Carousel>
        </div>
      </div>

      <div>
        <InfoGraph></InfoGraph>
      </div>

      <div className="md:w-4/5">
        <div>
          <FeaturedSection></FeaturedSection>
        </div>
        <div>
          <TrendingSection></TrendingSection>
        </div>
      </div>
    </main>
  );
}
