import type {User} from "../data/mockUsers.ts";

export default function UserModal({
                                      user,
                                      label,
                                      onClose
                                  }: {
    user: User | null;
    label: number;
    onClose: () => void;
}) {
    const cluster = user?.cluster;

    if (!user) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-96 text-white">
                <h2 className="text-2xl font-bold mb-4">User Details</h2>

                <p><strong>User ID:</strong> {user.user_id}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Sex:</strong> {user.sex}</p>
                <p><strong>Job Industry:</strong> {user.job_industry}</p>
                <div>
                    <p>
                        <strong>Customer segment:</strong>
                    </p>
                    <p className={`${cluster === 0 ? "text-red-500" : cluster === 1 ? "text-green-500" : "text-[#F59E0B]"}`}>
                        {user.customer_segment}
                    </p>
                </div>

                <div>
                    <p>
                        <strong>Comeback in next 6 months:</strong>
                    </p>
                    <p className={`${label === 0 ? "text-red-500" :  "text-green-500"}`}>
                        {`${label === 0 ? "No" :  "Yes"}`}
                    </p>
                </div>

                <button
                    className="w-full mt-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-500"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
