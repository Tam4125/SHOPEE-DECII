import React from "react";
import { User } from "../data/mockUsers.ts";
import { ClusterTag } from "./ClusterTag.tsx";

export const UserTable = ({ users }: { users: User[] }) => {
    return (
        <table className="w-full border-collapse mt-5">
            <thead>
            <tr className="bg-gray-100">
                <th className="p-3 text-left">User ID</th>
                <th className="p-3 text-left">Age</th>
                <th className="p-3 text-left">Sex</th>
                <th className="p-3 text-left">Industry</th>
                <th className="p-3 text-left">Cluster</th>
            </tr>
            </thead>
            <tbody>
            {users.map((u) => (
                <tr key={u.user_id} className="border-b">
                    <td className="p-3">{u.user_id}</td>
                    <td className="p-3">{u.age}</td>
                    <td className="p-3">{u.sex}</td>
                    <td className="p-3">{u.job_industry}</td>
                    <td className="p-3"><ClusterTag cluster={u.cluster} /></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
