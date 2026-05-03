import { useState, useEffect } from "react";
function HomepageAnimation(){
  const text = "Track your parcel easily";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
    } else {
      // wait, then reset
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 3000); // pause before restarting
    }

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <div>
    <h2 className="typing-text">
      {displayedText}
      <span className="cursor">|</span>
    </h2>
    <h3>Check your parcel's latest updates and delivery status right here</h3>
    </div>

  );
}

export default HomepageAnimation