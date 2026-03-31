import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault(); //get rid of navigation behaviour

        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter(note => note._id !== id)) //get rid of the deleted one from the array
            toast.success("Note deleted sucessfully")
        } catch (error) {
            console.log("Error in handleDelete", error)
            toast.error("Failed to delete note");
        }
    }

    return (
        <Link
            to={`/note/${note._id}`}
            className="card bg-base-100 
    border-t-4 border-solid border-[#c792e9]
    transition-all duration-300 ease-in-out
    hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] 
    hover:border-[#890094]"
        >
            <div className="card-body">
                <h3 className="card-title text-base-content transition-colors duration-300">
                    {note.title}
                </h3>

                <p className="text-base-content/70 line-clamp-3 transition-colors duration-300">
                    {note.content}
                </p>

                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {formatDate(new Date(note.createdAt))}
                    </span>

                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4 transition-transform duration-300 hover:scale-110" />

                        <button
                            className="btn btn-ghost btn-xs text-error transition-all duration-300 hover:scale-110"
                            onClick={(e) => handleDelete(e, note._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard
