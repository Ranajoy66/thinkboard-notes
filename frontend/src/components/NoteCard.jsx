import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = (e, id) => {
        e.preventDefault()
        e.stopPropagation()

        toast.custom(
            (t) => (
                <div
                    className={`
                    w-80 rounded-xl
                    border border-base-300
                    bg-base-100
                    p-4
                    shadow-2xl
                    ${t.visible ? "toast-enter" : "toast-exit"}
                `}
                >
                    <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-error/10">
                            <Trash2Icon className="size-4 text-error" />
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-semibold">
                                Are you sure you want to delete this note?
                            </p>

                        </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="
                            btn btn-ghost btn-sm
                            transition-all duration-200
                            hover:scale-105
                        "
                        >
                            Cancel
                        </button>

                        <button
                            onClick={async () => {
                                toast.dismiss(t.id)

                                try {
                                    await api.delete(`/notes/${id}`)

                                    setNotes((prevNotes) =>
                                        prevNotes.filter(
                                            (note) => note._id !== id
                                        )
                                    )

                                    toast.success("Note deleted successfully")
                                } catch (error) {
                                    console.error(
                                        "Error deleting note:",
                                        error
                                    )

                                    toast.error("Failed to delete note")
                                }
                            }}
                            className="
                            btn btn-error btn-sm text-white
                            transition-all duration-200
                            hover:scale-105
                        "
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ),
            {
                duration: Infinity,
            }
        )
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
