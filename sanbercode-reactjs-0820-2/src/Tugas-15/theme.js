import React from "react";

const ChangeTheme = () => {
  const darkMode = () => {
    var target = document.querySelectorAll(".navbar");
    target.forEach((element) => {
      element.classList.toggle("dark-theme");
    });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <h3>Click Button To Change Theme Color</h3>
      <button onClick={darkMode}>Change Theme</button>
    </div>
  );
};

export default ChangeTheme;
