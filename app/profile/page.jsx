"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile.jsx'
import CardSkeleton from '@components/CardSkeleton.jsx'

const MyProfile = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
      setLoading(false);
    }
    if (session?.user.id) fetchPosts();
  }, [])

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?')
    if (hasConfirmed)
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        });
        const filteredPrompts = posts.filter((p) => p._id !== post._id)
        setPosts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
  }

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
          name="My"
          desc="Welcome to your profile"
          data={posts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  )
}

export default MyProfile