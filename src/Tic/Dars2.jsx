import Box from "./Box"
const Dars2 = ({ xo, onClick }) => {
    return (
        <div className="board" >
            {xo.map((value, idx) => {
                return <Box key={idx} value={value} onClick={() => value === null && onClick(idx)} />
            })}

        </div>
    )
}

export default Dars2