import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#6366F1", "#10B981", "#F59E0B"];

export default function ClusterPieChart({ data }: { data: any[] }) {
    return (
        <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xl mb-2 font-semibold">Cluster Distribution</h2>
            <PieChart width={350} height={260}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                >
                    {data.map((_, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}
