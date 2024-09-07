import cookieImg from "./assets/cookie.webp";
import { useState, useEffect } from "react";
import PopUp from "./PopUp.jsx";
import ExpoGrow from "./ExpoGrow.jsx";
import Store from "./Store.jsx";

function Website() {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <>
      <div className="aniworld">
        <div className="section" id="section1">
          <div className="score">
            <span>{multiplier.toFixed(2)} Cookies/s</span>
            <span>{score.toFixed(2)} Cookies</span>
            <ExpoGrow setScore={setScore} multiplier={multiplier} />
          </div>

          <img
            id="cookie"
            src={cookieImg}
            onClick={() => setScore(score + 1)}
          />
        </div>
        <div className="section" id="section2">
          <PopUp scoreReached={score >= 10} />
          <PopUp scoreReached={score >= 25} />
        </div>
        <div className="section" id="section3">
          <Store setMultiplier={setMultiplier} />
        </div>
      </div>
    </>
  );
}

export default Website;
