import icon from "/src/assets/dt_logo white.svg";
import data from "../data"

export default function Footer () {
    const SocialIcons = data.socialIcons;
    const Sections = data.sections;
    return (
        <>
        <div className="flex bg-brand-blue py-5 rounded-t-3xl justify-between items-center">
            <div className="mx-10">
                <a className='flex items-center mb-1' href="/">
                    <img className="max-w-[34px] mr-1 fill-white" src={icon} alt="DocuTech Logo" />
                    <span className='font-bold text-white text-2xl'>DocuTech</span>
                </a>
                <p className="text-[15px] text-white">
                Powered by Classy Endeavors
                </p>
            </div>
            <div className="flex-col mx-10 justify-items-end">
                <div className="flex pb-3 mb-1 pl-5 border-white border-b-[1px]">
                    {SocialIcons.map((icon, index) => (
                        <a 
                            key={index} 
                            href={icon.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mx-2 "
                        >
                            <img 
                                src={icon.icon} 
                                alt={icon.name} 
                                className="h-4 hover:opacity-80 transition-opacity"
                            />
                        </a>
                    ))}
                </div>
                <div className="flex flex-wrap text-white text-[16px] ">
                    {Sections.map((Sections, index) => (
                        <a key={index}
                                href={Sections.link} 
                                className="mx-3 underline-effect"
                            >
                                {Sections.name}
                        </a>
                    ))}
                    <a href="#" className="mx-3 underline-effect">
                        Legal terms
                    </a>
                    <a href="?" className="mx-3 underline-effect">
                        Privacy Policy
                    </a>
                </div>

            </div>
        </div>
        </>
    )
}