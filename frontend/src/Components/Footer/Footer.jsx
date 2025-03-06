import icon from "/src/assets/dt_logo white.svg";
import data from "../data";

export default function Footer() {
  const SocialIcons = data.socialIcons;
  const Sections = data.sections;
  return (
    <>
      <div className="bg-brand-blue flex items-center justify-between rounded-t-3xl py-5">
        <div className="mx-10">
          <a className="mb-1 flex items-center" href="/">
            <img
              className="mr-1 max-w-[34px] fill-white"
              src={icon}
              alt="DocuTech Logo"
            />
            <span className="text-2xl font-bold text-white">DocuTech</span>
          </a>
          <p className="text-[15px] text-white">Powered by Classy Endeavors</p>
        </div>
        <div className="mx-10 flex-col justify-items-end">
          <div className="mb-1 flex border-b-[1px] border-white pb-3 pl-5">
            {SocialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="h-4 transition-opacity hover:opacity-80"
                />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap text-[16px] text-white">
            {Sections.map((Sections, index) => (
              <a
                key={index}
                href={Sections.link}
                className="underline-effect mx-3"
              >
                {Sections.name}
              </a>
            ))}
            <a href="#" className="underline-effect mx-3">
              Legal terms
            </a>
            <a href="?" className="underline-effect mx-3">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
