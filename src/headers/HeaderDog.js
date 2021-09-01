import './headers.css'

const HeaderDog = (props) => {
    // const reset = () => {
    //     return () => props.onReset(true);
    // }
    const changeHeader = () => {
        return props.onSwitch(true);
    }
    return (
        <header className="headers">Dogs with React
        <button className="dog-button" onClick={()=>props.onSwitch(false)}>...cats are better?</button>
        {/* <button className="dog-button" onClick={changeHeader()}>...cats are better?</button> */}
        </header>
    )
};

export default HeaderDog;