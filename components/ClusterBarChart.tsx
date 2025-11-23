import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function ClusterBarChart({ data }: { data: any[] }) {
    return (
        <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xl mb-2 font-semibold">Users per Cluster</h2>
            <BarChart width={450} height={260} data={data}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]} />
            </BarChart>
        </div>
    );
}
