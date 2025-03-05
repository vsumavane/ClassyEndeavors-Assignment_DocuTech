
function Button(prop) {
    return (
    <>
        <button onClick={prop.onClick} className={`${prop.className} flex bg-brand-blue transition duration-150 px-5 py-2 cursor-pointer hover:bg-brand-blue-mid active:scale-95 text-white font-light text-sm`}>
            {prop.imgSrc?<img className={`${prop.imgStyle} mr-2`} src={prop.imgSrc}/>:null}
            {prop.children}
        </button>
    </>
    )
}

export default Button;