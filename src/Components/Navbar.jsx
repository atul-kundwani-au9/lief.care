import { useUniCon } from "../Context/UniversalContext";

export function Navbar() {

  const { darkMode, setDarkMode, setSettings, name } = useUniCon()

  return (
    <div className="Navbar">
      <nav>       
        <div id="opensettings">      

          {darkMode? <img src="assets/light.png" onClick={() => {
            setDarkMode(false);
            localStorage.setItem("gozoPomoTheme", "false");
            }} alt="light mode" /> : <img src="assets/dark.png" onClick={() => {
              setDarkMode(true);
            localStorage.setItem("gozoPomoTheme", "true");
            }} alt="dark mode" />}
          <h3 onClick={() => setSettings(true)}>Settings</h3>
        </div>
      </nav>
      <h1>Welcome {name} !!</h1>
    </div>
  );
}
