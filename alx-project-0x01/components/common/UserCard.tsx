import React from "react";
import { UserProps } from "@/interfaces";
// export interface UserProps {
//     id: number;
//     name: string;
//     email: string;
//     phone: string;
//     username:string ;
// }

export async function getStaticProps() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props:{
            posts
        }
    }
}

// componet signature
const UserCard: React.FC<UserProps> = ({id, name, email, phone,username,address, website, company}: UserProps) =>{
    return (
        <div className=" border p-4 rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-700">Username: {username}</p>
            <p className="text-sm text-gray-600">{email}</p>
            <p className="text-sm text-gray-600">{phone}</p>
            <p className="text-sm text-gray-500">{address.city}</p>
        </div>
    )
}

export default UserCard;