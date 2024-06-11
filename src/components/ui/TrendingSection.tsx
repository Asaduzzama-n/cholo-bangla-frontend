import getAllEvents from "@/lib/getAllEvents";
import EmblaCarousel from "./CardCarousel/EmblaCarousel";
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const TrendingSection = async () => {
  const events = await getAllEvents();

  return (
    <div className=" w-full my-5  p-10 rounded-lg bg-[#ededed] dark:bg-[#ededed0d]">
      <EmblaCarousel slides={events.data}></EmblaCarousel>
    </div>
  );
};

export default TrendingSection;
