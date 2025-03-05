export default function Background() {
  return (
    <div className="absolute w-full -z-20">
      <div className="flex justify-between w-full  ">
      <div className="blur-[200px] bg-brand-blue w-[400px] h-[800px] rounded-r-full" /> 
      <div className="blur-[200px] bg-brand-blue w-[400px] h-[800px] rounded-l-full" />
      </div>
    </div>
  );
}