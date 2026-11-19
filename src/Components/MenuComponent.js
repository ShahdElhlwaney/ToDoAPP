import { useState } from "react";

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
