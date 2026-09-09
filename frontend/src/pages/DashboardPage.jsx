import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'
import api from '../lib/axios'
import toast from 'react-hot-toast'

import { Plus, NotebookIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")

        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log("Error fetching notes");
        // console.log(error)
        if (error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to get notes")
        }
      }
      finally { setLoading(false) }
    }

    fetchNotes();
  }, [])

  return <div className='min-h-screen'>
    <Navbar />

    {isRateLimited && <RateLimitedUI />}

    <div className="max-w-7xl mx-auto p-4 mt-6">
      {loading && <div className='text-center text-primary py-10'>Loading notes....</div>}

      {/* {notes.length === 0 && !isRateLimited && <NotesNotFound />} */}

      {notes.length > 0 && !isRateLimited && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}

      {/* New Note Button */}
      {!loading && !isRateLimited && (
        <>
          {notes.length === 0 ? (
            // No notes → show everything
            <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
              <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold">
                No notes yet
              </h3>

              <p className="text-base-content/70">
                Ready to organize your thoughts? Create your first note to get
                started on your journey.
              </p>

              <Link
                to="/create"
                className="group btn btn-primary transition-all duration-300 hover:scale-105"
              >
                <Plus
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
                <span>New Note</span>
              </Link>
            </div>
          ) : (
            // Notes exist → only show button
            <div className="flex justify-center mt-10 pb-8">
              <Link
                to="/create"
                className="group btn btn-primary transition-all duration-300 hover:scale-105"
              >
                <Plus
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
                <span>New Note</span>
              </Link>
            </div>
          )}
        </>
      )}

    </div>
  </div>
}

export default Dashboard;