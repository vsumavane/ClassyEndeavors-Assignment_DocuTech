import './NavBar.css'

function NavBar() {
    return (
        <>
            <div className='bg-amber-300 h-8 flex '>
                <a className=''>
                    <img src={require('../../assets/dt_logo.svg').default} alt="Home" />
                    <text className=''>DocuTech</text>
                </a>
                <button className=''>Press Here </button>
            </div>
        </>
    )
}

export default NavBar;