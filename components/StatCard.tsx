
interface Props {
    title: string;
    value: number;
}

export const StatCard = ({ title, value }: Props) => (
    <div className="bg-white shadow rounded-xl p-5">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-3xl font-semibold">{value}</h2>
    </div>
);
