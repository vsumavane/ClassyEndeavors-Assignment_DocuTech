
function Button(prop) {
    return (
    <>
        <button className={`${prop.buttonStyle} flex bg-blue-900 hover:bg-blue-800 px-2 py-2 cursor-pointer hover:shadow-2xl`}>
            <img className={prop.imgStyle} src={prop.imgUrl}/>
            <text className='px-2 text-white font-light text-sm '>
            {prop.children}
            </text>
        </button>
    </>
    )
}

export default Button;