import Button from "../Buttons/Button";
import data from "../data";
import icon from "/src/assets/dt_logo.svg";
import discordIcon from "/src/assets/icons/discord.svg";

function NavBar() {
    window.addEventListener("scroll", function() {
        let shadowClass = document.getElementById('NavBar');
        if (window.scrollY > 10.0) { 
            shadowClass.classList.add("shadow-md");
        } else {
            shadowClass.classList.remove("shadow-md");
        }
    });
    return (
        <div id='NavBar' className="sticky top-0 backdrop-blur-xl duration-300 z-20">
            <div className='flex mx-10 my-5 py-3 justify-between items-center'>
            <a className='flex items-center' href="/">
                <img className="max-w-[34px] mr-1" src={icon} alt="DocuTech Logo" />
                <span className='font-bold text-brand-blue text-2xl'>DocuTech</span>
            </a>
            <div className="flex text-[16px] justify-center font-light text-brand-black-light ">
                {data.sections.map((item, index) => (
                    <button href={item.link} key={index} className="hover:ring-2 hover:ring-brand-blue active:ring-1 rounded-2xl transition duration-300 px-4">
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="flex items-center space-x-5">
                <a href="https://discord.com">
                    <img className="hover:drop-shadow-[0px_3px_1px_rgba(0,0,0,0.25)]" src={discordIcon} alt="User Icon" />
                </a>
                <Button className={"rounded-md"}>Get Started</Button>
            </div>
        </div></div>
        
    )
}

export default NavBar;
