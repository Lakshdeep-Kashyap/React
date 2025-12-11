function Display({isLoggedIn,toggle}){
    return(
        <>
            <p> {isLoggedIn ? "User Logged In!" : "Please Log In!"} </p>
            <button onClick={() => toggle()}> {isLoggedIn ? "Logout" : "Login!"} </button>
        </>
    )
}

export default Display;