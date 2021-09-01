import './headers.css'

const HeaderCat = (props) => {
    // const reset = () => {
    //     () => props.onReset(true);
    // }

    // const changeHeader = () => {
    //     return props.onSwitch(true);
    // }

    return (
        <header className="headers">Cats with React
        <button className="dog-button" onClick={()=>props.onSwitch(true)}>...dogs are better?</button>        
        {/* <button className="dog-button" onClick={() => {props.onSwitch(true); props.onReset(true)}}>...dogs are better?</button> */}
        {/* <button className="dog-button" onClick={changeHeader()}>...dogs are better?</button> */}
        </header>
    )
};

export default HeaderCat;