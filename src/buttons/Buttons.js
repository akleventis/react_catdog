import './Buttons.css'
const Buttons = (props) => {
    return (
        <div className='buttons'>
            <button onClick={() => props.move("move-up")}>Up</button>
            <button onClick={() => props.move("move-down")}>Down</button>
            <button onClick={() => props.move("move-right")}>Right</button>
            <button onClick={() => props.move("move-left")}>Left</button>
            <button onClick={props.reset}>Reset</button>
            {/* <button>Come back</button> */}
        </div>
    )
}

export default Buttons