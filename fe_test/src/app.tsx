import React from "react";

import { useQuery } from "@apollo/client";

import { GET_EMPLOYEES } from "./queries/employeeQuery";

const App: React.FC = () => {

    const {
        loading,
        error,
        data
    } = useQuery(GET_EMPLOYEES);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const employees = data?.getEmployees || [];

    return (
        <>
            <h2>Nuevo app</h2>

            {employees.map((employee: any) => (
                <div key={employee?._id}>
                    <p>{employee?.name}</p>
                </div>
            ))}
        </>
    );
};

export default App;