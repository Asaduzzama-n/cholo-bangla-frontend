"use client";
import {
  formatCountdown,
  get_countdown,
  ICountDown,
} from "@/lib/countDownHelper";
import React, { useState, useEffect } from "react";

interface EventProps {
  startDate: string;
}

const CountDown = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const [countdown, setCountdown] = useState<ICountDown>({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [eventState, setEventState] = useState<
    "upcoming" | "started" | "ended"
  >("upcoming");

  useEffect(() => {
    const updateCountdown = () => {
      const newCountdown = get_countdown({ startDate });
      setCountdown(newCountdown);

      const now = new Date().getTime();
      const eventTime = new Date(startDate).getTime();

      const endTime = new Date(endDate).getTime();

      if (now >= eventTime) {
        setEventState("started");
      } else if (
        newCountdown.seconds === 0 &&
        newCountdown.minutes === 0 &&
        newCountdown.hours === 0 &&
        newCountdown.days === 0
      ) {
        setEventState("started");
      } else if (now >= endTime) {
        setEventState("ended");
      }
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate]);

  const formattedCountdown = formatCountdown(countdown);

  const timeUnits = [
    { value: countdown.days, label: "Days" },
    {
      value: countdown.hours,
      label: "Hours",
      className: "text-red-500 dark:text-red-300",
    }, // Separator for hours
    {
      value: countdown.minutes,
      label: "Minutes",
      className: "text-red-500 dark:text-red-300",
    }, // Separator for minutes
    { value: countdown.seconds, label: "Seconds" },
  ];

  let displayText;
  switch (eventState) {
    case "upcoming":
      displayText = formattedCountdown;
      break;
    case "started":
      displayText = "Event has started!";
      break;
    case "ended":
      displayText = "Event has ended.";
      break;
  }

  return (
    <div className="flex flex-col space-y-2 items-center w-full h-40 rounded-lg backdrop-blur bg-black/10 dark:bg-white/10  p-4 shadow-md">
      <p className="  text-center text-lg font-semibold ">Event Starts In:</p>
      <div className="flex justify-between w-full">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mx-2 p-4 rounded-lg text-xl w-16 font-bold  bg-gray-100 dark:bg-gray-800 shadow-md ${unit.className}`}
          >
            <span>{unit.value.toString().padStart(2, "0")}</span>
            <span className="text-sm">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
