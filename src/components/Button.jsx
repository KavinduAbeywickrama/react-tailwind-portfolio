import React from "react";
import { RiDownloadLine } from "@remixicon/react";

const Button = ({ label, classes, icon, onClick }) => {
  return <button className={`${classes} flex iterms-center gap-2`} onClick={onClick}>{label} 
  {icon && (
    <span>
        <RiDownloadLine />
    </span>)}
  </button>;
};

export default Button;
