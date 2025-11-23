export interface User {
    user_id: number;
    age: number;
    sex: string;
    job_industry: string;
    cluster: number;
    customer_segment: string;
}

export const mockUsers: User[] = [
    { user_id: 1, age: 24, sex: "Male", job_industry: "IT", cluster: 0, customer_segment: "Deal hunter"},
    { user_id: 2, age: 32, sex: "Female", job_industry: "Banking", cluster: 1, customer_segment: "Loyal" },
    { user_id: 3, age: 41, sex: "Female", job_industry: "Education", cluster: 2, customer_segment: "Potential" },
    { user_id: 4, age: 29, sex: "Male", job_industry: "Retail", cluster: 1, customer_segment: "Loyal" },
    { user_id: 5, age: 36, sex: "Male", job_industry: "Finance", cluster: 0, customer_segment: "Deal hunter" },
];
