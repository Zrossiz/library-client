import style from "./ToTop.module.css";
import { useScrollY } from "@/hooks/useScrollY";
import cn from "classnames";

export const ToTop = () => {
  const y = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={() => scrollToTop()}
        className={cn(style.toTop, {
          ["hidden"]: y < 100,
        })}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 132 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M131.439 87.2495L131.481 59.0391C131.483 58.1917 131.318 57.3563 131 56.6026C130.682 55.849 130.22 55.1988 129.654 54.7065L68.5995 1.48871C67.8609 0.846987 66.9761 0.501412 66.0683 0.500064C65.1605 0.498716 64.2747 0.841664 63.5342 1.48119L2.32212 54.5175C1.75404 55.0081 1.29058 55.6569 0.970419 56.4096C0.650259 57.1624 0.48269 57.9973 0.481699 58.8446L0.439822 87.0551C0.433211 88.0144 0.640223 88.9578 1.03888 89.7852C1.43754 90.6126 2.01297 91.2932 2.70409 91.7545C3.3952 92.2159 4.17621 92.4409 4.9642 92.4056C5.7522 92.3704 6.51776 92.0762 7.17964 91.5543L66.0022 45.0226L124.686 91.7288C125.347 92.2526 126.111 92.5491 126.899 92.5866C127.687 92.6242 128.469 92.4015 129.161 91.9422C129.854 91.4829 130.431 90.8041 130.832 89.9779C131.233 89.1517 131.443 88.2089 131.439 87.2495Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};