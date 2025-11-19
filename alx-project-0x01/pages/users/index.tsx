import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import UserCard from "@/components/common/UserCard";
import "../../app/globals.css";
import { useState } from "react";

export  function UsersPage() {
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <div className="p-5 text-2xl text-blue-600">
      <h2>Users Page</h2>
      <button onClick={()=> setIsModalOpen(true)}
        className="bg-green-600 text-white p-2 rounded">Add User</button>

        <UserModal isOpen= {isModalOpen}
        onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
}

interface UsersPageProps {
  posts: UserProps[];
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}



const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Users List</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {posts.map((user: UserProps) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              username={user.username}
              address={user.address}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;
