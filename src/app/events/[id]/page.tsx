import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CountDown from "@/components/ui/CountDown";

import { getSingleEvent } from "@/lib/getSingleEvetnt";
import Image from "next/image";
import React from "react";

const EventDetails = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const result = await getSingleEvent(id);
  const event = result.data;
  return (
    <div className="min-h-screen p-5 md:w-4/5 mx-auto">
      <div className="md:flex ">
        <div>
          <Image
            className="rounded-md"
            src={event.image}
            width={500}
            height={400}
            alt="Event Image"
          ></Image>
        </div>
        <div className="md:mx-20 font-semibold space-y-5 md:space-y-6">
          <p className="text-3xl  ">{event.title}</p>
          <p className="">
            Event by:
            <span className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg ml-1">
              {event.organizer.firstName}{" "}
            </span>
          </p>
          <br />

          <p>
            Event Fee:{" "}
            <span className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg">
              {event.fee}
            </span>
          </p>
          <div className="md:flex space-y-5 md:space-y-0 md:space-x-10 ">
            <p className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg">
              Capacity: {event.capacity}
            </p>
            <p className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg">
              Seat Left: {event.capacity - event.reservations.length}
            </p>
          </div>

          <div className="space-y-5 ">
            <p>
              Starts At:{" "}
              <span className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg">
                {new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",

                  minute: "2-digit",

                  day: "2-digit",

                  month: "long",

                  year: "numeric",
                }).format(new Date(event.startDate))}
              </span>
            </p>

            <p>
              Ends At:{" "}
              <span className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg ml-2">
                {new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",

                  minute: "2-digit",

                  day: "2-digit",

                  month: "long",

                  year: "numeric",
                }).format(new Date(event.endDate))}
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p>Destinations:</p>
            <div className="flex items-center relative">
              {event.destinations.map((destination: any, index: number) => (
                <div className="relative flex items-center" key={index}>
                  <p className="backdrop-blur bg-black/15 dark:bg-white/15 px-2 rounded-lg">
                    {destination}
                  </p>
                  {index < event.destinations.length - 1 && (
                    <span className="w-8 h-px bg-black dark:bg-white "></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">
                    Description
                  </AccordionTrigger>
                  <AccordionContent className="">
                    {event.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </p>
          </div>
          <div>
            <button className="p-2 bg-black/10 dark:bg-white/15 backdrop-blur-md text-black dark:text-white font-semibold rounded-lg  hover:bg-black/25 dark:hover:bg-white/25 transition duration-300">
              Make a Reservation
            </button>
          </div>
          <br />
        </div>
        <div className="md:mt-60">
          <CountDown
            startDate={event.startDate}
            endDate={event.endDate}
          ></CountDown>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
