import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export default function RadarSegmentChart({ data }: { data: any[] }) {
    return (
        <div className="bg-gray-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xl mb-2 font-semibold">Cluster Behavioral Radar</h2>
            <RadarChart outerRadius={90} width={400} height={260} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" stroke="#ccc" />
                <PolarRadiusAxis />
                <Radar dataKey="score" stroke="#34D399" fill="#34D399" fillOpacity={0.4} />
            </RadarChart>
        </div>
    );
}
