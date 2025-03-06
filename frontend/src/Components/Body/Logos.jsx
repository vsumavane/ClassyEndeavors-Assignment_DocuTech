import data from "../data";

export function Logos() {
  const logos = data.clientLogos;
  return (
    <>
      <div className="my-10 flex flex-wrap justify-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="mx-10 max-w-[162px]"
          />
        ))}
      </div>
    </>
  );
}
