
function Button(prop) {
    return (
    <>
        <button className={`${prop.className} flex bg-brand-blue transition duration-150 px-2 py-2 cursor-pointer hover:bg-brand-blue-mid active:scale-95`}>
            <img className={prop.imgStyle} src={prop.imgUrl}/>
            <p className='px-2 text-white font-light text-sm '>
            {prop.children}
            </p>
        </button>
    </>
    )
}

export default Button;