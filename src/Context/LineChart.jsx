import { LineChart, YAxis, CartesianGrid, XAxis, Tooltip, Legend, Line, } from "recharts"
const LineCharts = () => {
    const data = [
        {
            "name": "1-OY",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "2-OY",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "3-OY",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "4-OY",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "5-OY",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "7-OY",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "8-OY",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (

        <LineChart width={700} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )
}

export default LineCharts