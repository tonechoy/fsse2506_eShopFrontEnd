import {faBackwardStep} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

export default function ScrollToTopBtn() {
  const [showBtn, setshowBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
    if (window.scrollY > 450) {
      setshowBtn(true);
    } else {
      setshowBtn(false);
    }}
    //   console.log(window.scrollY)
    // }
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {
        showBtn &&
          <div
              className="flex bg-gray-400 w-10 h-10 justify-center items-center fixed bottom-10 right-10 hover:bg-gray-500"
              onClick={() => window.scrollTo({
                top:250,
                behavior:"smooth"
              })}
          >
              <FontAwesomeIcon icon={faBackwardStep} rotation={90} style={{color: "#ffffff",}} className=""/>
          </div>
      }
    </>
  )
}