import Button from "../Buttons/Button";
import data from "../data";
import { SignUp } from "./signup";
import icon from "/src/assets/dt_logo.svg";
import discordIcon from "/src/assets/icons/discord.svg";

function NavBar() {
  window.addEventListener("scroll", function () {
    let shadowClass = document.getElementById("NavBar");
    if (window.scrollY > 60) {
      shadowClass.classList.add("shadow-md");
    } else {
      shadowClass.classList.remove("shadow-md");
    }
  });
  return (
    <>
      <SignUp />
      <div
        id="NavBar"
        className="sticky top-0 z-20 backdrop-blur-xl duration-300"
      >
        <div className="mx-10 my-5 flex items-center justify-between py-3">
          <a className="flex items-center" href="/">
            <img className="mr-1 max-w-[34px]" src={icon} alt="DocuTech Logo" />
            <span className="text-brand-blue text-2xl font-bold">DocuTech</span>
          </a>
          <div className="text-brand-black-light flex justify-center text-[16px] font-light">
            {data.sections.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="hover:ring-brand-blue rounded-2xl px-4 text-[16px] transition duration-300 hover:ring-2 active:ring-1"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-5">
            <a href="https://discord.com">
              <img
                className="hover:drop-shadow-[0px_3px_1px_rgba(0,0,0,0.25)]"
                src={discordIcon}
                alt="User Icon"
              />
            </a>
            <Button className={"rounded-md"}>Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
