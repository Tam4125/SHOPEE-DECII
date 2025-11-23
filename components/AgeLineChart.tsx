import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function AgeLineChart({ data }: { data: any[] }) {
    return (
        <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xl mb-2 font-semibold">Average Age per Cluster</h2>
            <LineChart width={450} height={260} data={data}>
                <XAxis dataKey="cluster" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avgAge" stroke="#F87171" strokeWidth={3} />
            </LineChart>
        </div>
    );
}
