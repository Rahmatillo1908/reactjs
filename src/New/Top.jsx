
const Top = ({ ballUchun, Xplayer }) => {
    let { xBall, oBall } = ballUchun
    return (
        <div className="top" >
            <p><span>X</span> - {xBall}</p>
            <p><span>O</span> - {oBall}</p>
        </div>
    )
}

export default Top