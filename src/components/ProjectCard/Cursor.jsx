import React from "react";

function Cursor({ isVisible, mousePosition }) {
  return (
    <div 
      className={`custom-cursor ${isVisible ? 'visible' : ''}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      {/* Outer rotating text ring */}
      <div className="cursor-text-ring">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <defs>
            <path
              id="circle-path"
              d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text className="rotating-text">
            <textPath href="#circle-path">
              VIEW PROJECT • VIEW PROJECT • VIEW PROJECT • 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner arrow - using your original SVG */}
      <div className="cursor-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="50" fill="white"/>
          <path d="M63.5436 38.446C63.5605 37.6177 62.9028 36.9326 62.0745 36.9157L48.5774 36.6401C47.7491 36.6232 47.064 37.2809 47.047 38.1092C47.0301 38.9374 47.6879 39.6226 48.5161 39.6395L60.5136 39.8844L60.2686 51.8819C60.2517 52.7102 60.9095 53.3953 61.7377 53.4123C62.566 53.4292 63.2511 52.7714 63.268 51.9432L63.5436 38.446ZM37.5728 61.9072L38.6115 62.9893L63.0827 39.4975L62.0439 38.4154L61.0051 37.3333L36.534 60.8251L37.5728 61.9072Z" fill="black"/>
        </svg>
      </div>
    </div>
  );
}

export default Cursor;