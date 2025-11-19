// post cards
import React from "react";
import { PostProps } from "@/interfaces/PostProps";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">{body}</p>
      <small>Post ID: {id}</small>
    </div>
  );
};

export default PostCard;
