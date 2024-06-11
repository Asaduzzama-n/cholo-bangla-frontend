export interface ICountDown {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function get_countdown(event: { startDate: string }): ICountDown {
  const now = new Date();
  const eventStart = new Date(event.startDate);
  const timeLeft = eventStart.getTime() - now.getTime();

  const years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const weeks = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 7)
  );
  const days = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { years, months, weeks, days, hours, minutes, seconds };
}

export function formatCountdown(countdown: ICountDown): string {
  let countdownStr = "Countdown to event: ";
  let addedSomething = false;

  const units = [
    { value: countdown.years, label: "years" },
    { value: countdown.months, label: "months" },
    { value: countdown.weeks, label: "weeks" },
    { value: countdown.days, label: "days" },
  ];

  for (const unit of units) {
    if (unit.value > 0) {
      countdownStr += `${unit.value} ${unit.label}, `;
      addedSomething = true;
    }
  }

  const remainingUnits = [
    { value: countdown.hours, label: "hours" },
    { value: countdown.minutes, label: "minutes" },
    { value: countdown.seconds, label: "seconds" },
  ];

  for (const unit of remainingUnits) {
    if (addedSomething || unit.value > 0) {
      countdownStr += `${unit.value.toString().padStart(2, "0")} ${
        unit.label
      }, `;
      addedSomething = true;
    }
  }

  // Remove trailing comma and space if no time was added
  if (!addedSomething) {
    countdownStr += "0 seconds";
  } else {
    countdownStr = countdownStr.slice(0, -2);
  }

  return countdownStr;
}
