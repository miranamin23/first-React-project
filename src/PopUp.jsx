import { useEffect, useState } from "react";

function PopUp({ scoreReached }) {
  const [isVisible, setIsVisible] = useState(true);

  const closePopUp = () => {
    setIsVisible(false);

    useEffect(() => {
      const popUpInterval = setInterval(() => {});
      return () => clearInterval(popUpInterval);
    }, []);
  };

  // guard clause
  if (!scoreReached) return null;

  return (
    <>
      {isVisible && (
        <div id="popup">
          Achievement unlocked!
          <div>Cookie Monster</div>
          <button id="button" onClick={closePopUp}>
            Schließen
          </button>
        </div>
      )}
    </>
  );
}
export default PopUp;
