"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";
import CardSkeleton from "@components/CardSkeleton.jsx";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
      setLoading(false);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <div>
      {loading ? (
        <div className='prompt_layout'>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
          <Profile
            name={userName}
            desc={`Welcome to ${userName}'s profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination.`}
            data={userPosts}
          />
      )}
    </div>
    
  );
};

export default UserProfile;