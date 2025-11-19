import React from "react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // modal hidden unless isOpen = true

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <form className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Name" 
            className="border p-2 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Username" 
            className="border p-2 rounded"
          />

          <button 
            type="button"
            className="bg-blue-600 text-white p-2 rounded"
          >
            Save User
          </button>
        </form>

        <button 
          onClick={onClose} 
          className="mt-4 text-red-500 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
