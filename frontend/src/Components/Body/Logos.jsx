import data from '../data'

export function Logos(){
    const logos = data.clientLogos;
    return (
        <>
        <div className='flex justify-center my-10 flex-wrap'>
            {logos.map((logo, index) => (
                <img 
                    key={index}
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-w-[162px] mx-10"
                />
            ))}
        </div>
            
        </>
    )
}