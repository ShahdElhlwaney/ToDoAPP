import { useState } from "react";
import "./navBar.css";

export function MenuComponent({ className, children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${className} ${isActive ? "active" : ""}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
    </div>
  );
}
