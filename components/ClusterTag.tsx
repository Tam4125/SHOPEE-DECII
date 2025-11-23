
const clusterColors = ["bg-green-200", "bg-yellow-200", "bg-red-200"];
const clusterNames = ["Loyal", "Potential", "Deal Hunter"];

export const ClusterTag = ({ cluster }: { cluster: number }) => {
    return (
        <span className={`px-3 py-1 rounded-full text-sm ${clusterColors[cluster]}`}>
      {clusterNames[cluster]}
    </span>
    );
};
