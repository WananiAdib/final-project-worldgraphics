function NavBar() {
    return (
        <div className='header'>
            <h1>Homies</h1>
            <span>
            logged in as: @{user}
            </span>
            <button>Logout</button>
        </div>
      );
}

export default NavBar;