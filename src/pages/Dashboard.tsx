import {useMemo, useState} from "react";
import {mockUsers, type User} from "../../data/mockUsers.ts";
import {StatCard} from "../../components/StatCard.tsx";
import {ClusterFilter} from "../../components/ClusterFilter.tsx";
import {UserTable} from "../../components/UserTable.tsx";
import {BarChartIndustry} from "../../components/BarChartIndustry.tsx";
import {UserSearch} from "../../components/UserSearch.tsx";
import UserModal from "../../components/UserModal.tsx";
import ClusterPieChart from "../../components/ClusterPieChart.tsx.tsx";
import ClusterBarChart from "../../components/ClusterBarChart.tsx";
import AgeLineChart from "../../components/AgeLineChart.tsx";
import RadarSegmentChart from "../../components/RadarSegmentChart.tsx";


export const Dashboard = () => {
    const [searchId, setSearchId] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSearch = () => {
        const user = mockUsers.find(u => u.user_id === Number(searchId));
        setSelectedUser(user || null);
    };

    const clusterCount = [
        { name: "Loyal Users", value: 12 },
        { name: "Potential Users", value: 19 },
        { name: "Deal Hunters", value: 9 },
    ];

    const ageData = [
        { cluster: "Loyal", avgAge: 34 },
        { cluster: "Potential", avgAge: 28 },
        { cluster: "Deal", avgAge: 31 },
    ];

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
                <ClusterPieChart data={clusterCount} />
                <ClusterBarChart data={clusterCount} />
                <AgeLineChart data={ageData} />
                <RadarSegmentChart data={radarData} />
            </div>

            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    );
};
