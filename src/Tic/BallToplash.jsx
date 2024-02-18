function BallToplash({ ball, xPlaying }) {
    const { xBall, oBall } = ball;
    return (
        <div className="scoreball" >
            <span className={`score x-score ${!xPlaying && "inactive"}`} >X - {xBall}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`} >0 - {oBall}</span>
        </div>
    )
}
export default BallToplash