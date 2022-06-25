import "teclado.styles.css"



const Teclado = (props) => {
    return (
        <div>
            <div>
                <button onClick={props.onClick}>7</button>
                <button onClick={props.onClick}>8</button>
                <button onClick={props.onClick}>9</button>
                <button onClick={props.onClick}>/</button>
            </div>
            <div>
                <button onClick={props.onClick}>4</button>
                <button onClick={props.onClick}>5</button>
                <button onClick={props.onClick}>6</button>
                <button onClick={props.onClick}>*</button>
            </div>
            <div >
                <button onClick={props.onClick}>1</button>
                <button onClick={props.onClick}>2</button>
                <button onClick={props.onClick}>3</button>
                <button onClick={props.onClick}>-</button>
            </div>
            <div >
                <button onClick={props.onClick}>0</button>
                <button onClick={props.onClick}>.</button>
                <button onClick={props.onClick}>=</button>
                <button onClick={props.onClick}>+</button>
            </div>
        </div>
    )
}

export default Teclado;