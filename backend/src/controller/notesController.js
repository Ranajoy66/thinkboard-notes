import Note from "../model/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}) //-1 will sort in desc. order (newest first)
        res.status(200).json(notes)
    }
    catch (error) {
        console.log("error in getAllNotes controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function getNotesById(req,res) {
    try {
        const note=await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"note not found"})
        res.json(note)
    } catch (error) {
        console.log("error in getNotesById controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
    
}

export async function createNotes(req, res) {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })
        const savedNote = await note.save()
        res.status(201).json(savedNote)
        // console.log(title,content)
    } catch (error) {
        console.log("error in createNotes controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function updateNotes(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote=await Note.findByIdAndUpdate(req.params.id, { title, content },{new: true})

        if(!updatedNote) return res.status(404).json({message:"note not found"})
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log("error in updateNotes controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function deleteNotes(req, res) {
    try {
        const deletedNote=await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"note not found"})
        res.json({message:"note deletion success"})
    } catch (error) {
        console.log("error in deleNotes controller", error)
        res.status(200).json({ message: "note delete  sucsess" })
    }
}