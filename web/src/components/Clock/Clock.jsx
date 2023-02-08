import React, { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("2023-12-25").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 1) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);

  return (
    <>
      <div className="flex items-center my-4 text-center text-xl">
        <div className="flex-fol pr-3">
          <h1>{days}</h1>
          <h1>days</h1>
        </div>
        :
        <div className="flex-fol px-2">
          <h1>{hours}</h1>
          <h1>Hours</h1>
        </div>
        :
        <div className="flex-fol px-2">
          <h1>{minutes}</h1>
          <h1>Minutes</h1>
        </div>
        :
        <div className="flex-fol px-2">
          <h1>{seconds}</h1>
          <h1>Seconds</h1>
        </div>
      </div>
    </>
  );
};

export default Clock;
