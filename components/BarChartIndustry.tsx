import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export const BarChartIndustry = ({ data }: { data: any[] }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Users by Job Industry</h3>

            <BarChart width={450} height={300} data={data}>
                <XAxis dataKey="industry" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#60A5FA" />
            </BarChart>
        </div>
    );
};
