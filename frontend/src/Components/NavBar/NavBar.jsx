import Button from "../Buttons/Button";
import data from "../data";

function NavBar() {
    return (
        <>
            <div className='flex px-5 py-10 w-full justify-around items-center'>
                <a className='flex items-center' href="/">
                    <img className="size-5 mr-1" src="src/assets/dt_logo.svg" alt="DocuTech Logo" />
                    <span className='font-bold text-blue-900'>DocuTech</span>
                </a>
                <div className="flex justify-center font-light text-gray-800">
                    {data.navBar.sections.map((item, index) => (
                        <a href={item.link} key={index} className="px-4 hover:border rounded-2xl">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="flex items-center">
                    <a href="https://discord.com">
                        <img className='mr-5' src="src/assets/icons/discord.svg" alt="User Icon" />
                    </a>
                    <Button buttonStyle={"rounded-md"}>Get Started</Button>
                </div>
            </div>
        </>
    )
}

export default NavBar;