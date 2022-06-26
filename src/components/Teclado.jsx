import "../styles/teclado.styled.css";



const Teclado = (props) => {
    return (
        <div className="Teclado">
            <div>
                <button className="Button" onClick={props.onClick}>7</button>
                <button className="Button" onClick={props.onClick}>8</button>
                <button className="Button" onClick={props.onClick}>9</button>
                <button className="Button" onClick={props.onClick}>/</button>
            </div>
            <div>
                <button className="Button" onClick={props.onClick}>4</button>
                <button className="Button" onClick={props.onClick}>5</button>
                <button className="Button" onClick={props.onClick}>6</button>
                <button className="Button" onClick={props.onClick}>*</button>
            </div>
            <div >
                <button className="Button" onClick={props.onClick}>1</button>
                <button className="Button" onClick={props.onClick}>2</button>
                <button className="Button" onClick={props.onClick}>3</button>
                <button className="Button" onClick={props.onClick}>-</button>
            </div>
            <div >
                <button className="Button" onClick={props.onClick}>0</button>
                <button className="Button" onClick={props.onClick}>.</button>
                <button className="Button" onClick={props.onClick}>=</button>
                <button className="Button" onClick={props.onClick}>+</button>
            </div>
        </div>
    )
}

export default Teclado;