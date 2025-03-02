
function Button(prop) {
    return (
    <>
        <button className={`${prop.className} flex bg-brand-blue hover:bg-(--brand-blue-800) transition duration-150 px-2 py-2 cursor-pointer hover:shadow-2xl active:scale-95`}>
            <img className={prop.imgStyle} src={prop.imgUrl}/>
            <text className='px-2 text-white font-light text-sm '>
            {prop.children}
            </text>
        </button>
    </>
    )
}

export default Button;