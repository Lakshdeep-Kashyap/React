function RenderList(){
    const Bakery = ["Biscuits","Croissant","Cake","Pastries","Cookies"];
    return(
        <>
            <ol>
                {Bakery.map((item) => (
                    <li>{item}</li>
                ))}
            </ol>
        </>
    )
}

export default RenderList;