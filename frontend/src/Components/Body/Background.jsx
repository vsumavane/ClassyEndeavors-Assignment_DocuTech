export default function Background() {
  return (
    <div className="absolute -z-20 w-full">
      <div className="flex w-full justify-between">
        <div className="bg-brand-blue h-[800px] w-[400px] rounded-r-full blur-[200px]" />
        <div className="bg-brand-blue h-[800px] w-[400px] rounded-l-full blur-[200px]" />
      </div>
    </div>
  );
}
