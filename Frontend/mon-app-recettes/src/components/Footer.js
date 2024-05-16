import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0,0,0, 0.2" }}
      >
        &copy; 2024 LyonEat:{" "}
        <a
          className="text-dark" target="_blank" rel="noopener noreferrer"
          href="https://github.com/FireFox-d3vFR/projet-node-recette"
        >
          lyoneat.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
