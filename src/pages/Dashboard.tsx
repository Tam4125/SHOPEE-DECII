import {useEffect, useState} from "react";
import UserModal from "../../components/UserModal.tsx";
import ClusterPieChart from "../../components/ClusterPieChart.tsx.tsx";
import ClusterBarChart from "../../components/ClusterBarChart.tsx";
import AgeLineChart from "../../components/AgeLineChart.tsx";
import RadarSegmentChart from "../../components/RadarSegmentChart.tsx";
import {fetchClusterStat, fetchUserById, predictUser} from "../lib/api.ts";


export const Dashboard = () => {
    const [searchId, setSearchId] = useState("");
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const [clusterData, setClusterData] = useState<any[]>([]);
    const [label, setLabel] = useState(0);
    const [ageData, setAgeData] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);

    // Load dashboard stats from backend
    useEffect(() => {

        const loadData = async () => {
            const dataStat = await fetchClusterStat();

            const clusterCountObj = dataStat.clusterCount;
            const avgAgeObj = dataStat.avgAge;

            const clusterArray = Object.keys(clusterCountObj).map(key => ({
                name:
                    key === "0" ? "Loyal Users" :
                        key === "1" ? "Potential Users" :
                            key === "2" ? "Deal Hunters" : `Cluster ${key}`,
                value: clusterCountObj[key]
            }));

            const ageArray = Object.keys(avgAgeObj).map(key => ({
                cluster:
                    key === "0" ? "Loyal" :
                        key === "1" ? "Potential" :
                            key === "2" ? "Deal Hunter" : `Cluster ${key}`,
                avgAge: avgAgeObj[key]
            }));

            setClusterData(clusterArray);
            setAgeData(ageArray);
            // setLoading(false);
        };
        loadData();
    }, []);

    const handleSearch = async () => {
        try {
            const user = await fetchUserById(searchId);
            setSelectedUser(user || null);
            const predictedlabel = await predictUser(searchId);
            setLabel(predictedlabel);
        } catch (error: any) {
            throw new Error("Failed to fetch user");
        }
    };


    const radarData = [
        { metric: "Repeat Purchase", score: 85 },
        { metric: "Price Sensitivity", score: 65 },
        { metric: "Browsing Time", score: 70 },
    ];

    return (
        <div className="p-8 space-y-8">

            {/* Search Box */}
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-2xl">
                <input
                    type="number"
                    placeholder="Enter user_id"
                    className="bg-gray-700 px-4 py-2 rounded-xl focus:outline-none w-60"
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500"
                >
                    Search
                </button>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-2 gap-6">
                <ClusterPieChart data={clusterData} />
                <ClusterBarChart data={clusterData} />
                <AgeLineChart data={ageData} />
                <RadarSegmentChart data={radarData} />
            </div>

            <UserModal user={selectedUser} label={label} onClose={() => setSelectedUser(null)} />
        </div>
    );
};
