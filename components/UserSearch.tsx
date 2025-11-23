import { useState } from "react";

export const UserSearch = ({
                               onSearch,
                           }: {
    onSearch: (id: number) => void;
}) => {
    const [value, setValue] = useState("");

    return (
        <div className="flex items-center gap-3 mt-6 mb-2">
            <input
                type="number"
                className="px-4 py-2 rounded-lg border w-60 focus:ring focus:ring-blue-300"
                placeholder="Search user_id..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                    if (value) onSearch(Number(value));
                }}
            >
                Search
            </button>
        </div>
    );
};
