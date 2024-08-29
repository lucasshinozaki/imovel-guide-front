import './index.css'

function Square({children, noBorder}){
    return (
        <div className={`square ${noBorder ? 'no-border' : ''}`}>
            {children}
        </div>
    )

}
export default Square