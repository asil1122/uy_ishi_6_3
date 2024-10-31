import React from "react";

const useToggleTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const colorTheme = theme === "dark" ? "light" : "dark";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useToggleTheme;