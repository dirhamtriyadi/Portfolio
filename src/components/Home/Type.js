import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "AdonisJS Developer",
          "Odoo Stack Developer",
          "Laravel Developer",
          "Golang Developer",
          "React & React Native Developer",
          "SvelteKit Developer",
          "Tailwind CSS Enthusiast",
          "Linux Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
