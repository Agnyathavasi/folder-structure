import React from "react";

export const Icon = ({ isDir }) => {
  return (
    <>
      {isDir ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFA000"
            d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"
          ></path>
          <path
            fill="#FFCA28"
            d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 48 48"
        >
          <path
            fill="#50e6ff"
            d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"
          ></path>
          <linearGradient
            id="F8F33TU9HxDNWNbQYRyY3a_XWoSyGbnshH2_gr1"
            x1="28.529"
            x2="33.6"
            y1="15.472"
            y2="10.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3079d6"></stop>
            <stop offset="1" stopColor="#297cd2"></stop>
          </linearGradient>
          <path
            fill="url(#F8F33TU9HxDNWNbQYRyY3a_XWoSyGbnshH2_gr1)"
            d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
          ></path>
        </svg>
      )}
    </>
  );
};
