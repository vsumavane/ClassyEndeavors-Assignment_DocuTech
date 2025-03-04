export default function Background() {
    return (
<>
  <div className="absolute inset-0  overflow-x-hidden">
    {/* Left Blur */}
    <div className="absolute left-[-700px] top-0 blur-[1000px] bg-brand-blue w-[870px] h-[870px] rounded-full opacity-50" />
    
    {/* Right Blur */}
    <div className="absolute right-[-350px] top-0 blur-[1000px] bg-brand-blue w-[870px] h-[870px] rounded-full opacity-50" />
  </div>
</>
    )
}