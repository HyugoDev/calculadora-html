import React, { useEffect } from "react";

import "pantalla.styled.css"












const Pantalla = (props) => {
    const { resultado, operacion, numero1, numero2, rest } = props;


    useEffect(() => {


    }, [resultado, operacion, numero1, numero2, rest]);




    const display = {
        "": (<>
            <div>

            </div>
            <div>
                <h3>{operacion}</h3>
            </div>
            <div>
                <h2>{numero2}</h2>
            </div>
        </>),

    }

    const displayResultado = (resultado, rest) => {
        // si el resultado esta vacio y rest es true no se muestra nada
        if (resultado === "" && rest) {
            return (<>
                <div>

                </div>
            </>);
        }

        if (resultado === "" && !rest && numero1 > 0) {
            return (
                <>
                <div>
                    <h2>{numero1}</h2>
                </div>
                <div>
                    <h3>{operacion}</h3>
                </div>
                <div>
                    <h2>{numero2}</h2>
                </div>
                </>
            );
        }

        return (<>
            <div>
                <h2>{resultado}</h2>
            </div>
        </>);
    }

    return (
        <div>
            <div>
                {
                    displayResultado(resultado, rest)


                }
            </div>
            <div>
                <button onClick={props.onClick}>c</button>
            </div>
        </div>


    )
}



export default Pantalla;