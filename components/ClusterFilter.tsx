
export const ClusterFilter = ({
                                  selected,
                                  onChange
                              }: {
    selected: number | null;
    onChange: (value: number | null) => void;
}) => {
    return (
        <div className="flex gap-3 my-4">
            <button
                onClick={() => onChange(null)}
                className={`px-4 py-2 rounded-md ${selected === null ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
                All
            </button>

            <button onClick={() => onChange(0)} className="px-4 py-2 bg-green-200 rounded-md">
                Loyal
            </button>

            <button onClick={() => onChange(1)} className="px-4 py-2 bg-yellow-200 rounded-md">
                Potential
            </button>

            <button onClick={() => onChange(2)} className="px-4 py-2 bg-red-200 rounded-md">
                Deal Hunter
            </button>
        </div>
    );
};
