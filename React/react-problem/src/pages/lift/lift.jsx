import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Lift = () => {
  const totalFloors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentFloor, setCurrentFloor] = useState(0);
  const [selectFloor, setSelectFloor] = useState(0);

  const handleClick = (value) => {
    setSelectFloor(value);
  };

    useEffect(() => {
        if (currentFloor === selectFloor) return;
        const direction = currentFloor < selectFloor ? 1 : -1;
        const interval = setInterval(() => {
            setCurrentFloor((prev) => {
                if(prev === selectFloor) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + direction;
            })
        }, 1000);

    }, [selectFloor, currentFloor]);


  return (
    <div>
      <Link to="/">back to Home Page</Link>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :</p>

      <div className="lift-display">
        <p style={{color: currentFloor < selectFloor ? "green" : ""}}>Up</p> <p>{currentFloor}</p> <p style={{color: currentFloor > selectFloor ? "green" : ""}}>Down</p>
      </div>

      <div>
        {totalFloors.map((item, index) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
        <button onClick={() => {setCurrentFloor(0); setCurrentFloor(0)}}>Reset</button>
      </div>
    </div>
  );
}
