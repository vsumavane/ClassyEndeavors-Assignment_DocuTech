import Button from "../Buttons/Button";
import data from "../data";
import icon from "/src/assets/dt_logo.svg";
import discordIcon from "/src/assets/icons/discord.svg";

function NavBar() {
    return (
        <div className='flex mx-10 my-10 justify-between items-center'>
            <a className='flex items-center' href="/">
                <img className="size-5 mr-1" src={icon} alt="DocuTech Logo" />
                <span className='font-bold text-blue-900'>DocuTech</span>
            </a>
            <div className="flex justify-center font-light text-brand-black-light space-x-4">
                {data.navBar.sections.map((item, index) => (
                    <button href={item.link} key={index} className="hover:ring-2 hover:ring-brand-blue active:ring-1 rounded-2xl transition duration-300 px-4">
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="flex items-center space-x-5">
                <a href="https://discord.com">
                    <img src={discordIcon} alt="User Icon" />
                </a>
                <Button className={"rounded-md"}>Get Started</Button>
            </div>
        </div>
    )
}

export default NavBar;
