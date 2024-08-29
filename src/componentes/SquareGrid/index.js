import Square from "../Square"
import Square1 from "../Square1"
import Square2 from "../Square2"
import Square3 from "../Square3"
import Square4 from "../Square4"
import Square5 from "../Square5"
import Square6 from "../Square6"
import "./index.css"


function SquareGrid() {
    return (
        <div className="square-grid">
            <Square><Square1/></Square>
            <Square><Square2/></Square>
            <Square><Square3/></Square>
            <Square noBorder><Square4/></Square>
            <Square noBorder><Square5/></Square>
            <Square noBorder><Square6/></Square>
        </div>
    )
}

export default SquareGrid