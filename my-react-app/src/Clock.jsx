import { useEffect, useState } from "react";

function Clock() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const inter = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(inter); // cleanup
  }, []);

  function Timelr() {
    const hour = clock.getHours().toString().padStart(2, "0");
    const min = clock.getMinutes().toString().padStart(2, "0");
    const sec = clock.getSeconds().toString().padStart(2, "0");

    return `${hour}:${min}:${sec}`;
  }

  return (
    <div className="clock-cont">
      <div className="clock">
        <span>{Timelr()}</span>
      </div>
    </div>
  );
}

export default Clock;
