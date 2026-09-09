🧠 ThinkBoard – Notes Management App

A modern, responsive, and secure Notes Management Web Application built with the MERN Stack — MongoDB, Express.js, React.js, and Node.js.

ThinkBoard allows users to register, log in, and securely manage their personal notes. Each user's notes are associated with their account, ensuring that users can only access, edit, and delete their own notes.

🚀 Features
🔐 Authentication
👤 User Registration
🔑 User Login
🚪 User Logout
🛡️ Protected Routes
🔒 Secure User Authentication
👥 User-specific data and notes
📝 Notes Management
➕ Create notes
✏️ Edit notes
🗑️ Delete notes
👀 View personal notes
📅 Automatic date tracking
🔄 Full CRUD functionality
🔐 Notes are securely associated with the logged-in user
🎨 UI & Experience
🌙 Modern dark-themed interface
🃏 Clean card-based UI
📱 Responsive and mobile-friendly design
⚡ Fast and smooth user experience
🎯 Simple and intuitive interface

🖼️ UI Preview
![ThinkBoard UI](./assests/new_notes_app_preview.jpg)

🛠️ Tech Stack
Frontend
⚛️ React.js
🎨 CSS / Tailwind CSS
📡 Axios

Backend
🟢 Node.js
🚂 Express.js
🔐 Authentication & Authorization
🛡️ Protected API Routes
Database
🍃 MongoDB
🦫 Mongoose
🔐 Authentication & User-Specific Notes

ThinkBoard is designed as a multi-user notes application.

After registering and logging in, each user gets access to their own notes.

User A
 ├── Note 1
 ├── Note 2
 └── Note 3

User B
 ├── Note 1
 └── Note 2


User A cannot access User B's notes, and vice versa.

User Flow
Register
   ↓
Login
   ↓
Authentication
   ↓
Personal Dashboard
   ↓
Create / View / Edit / Delete Notes


Every note is associated with the authenticated user's account, allowing the backend to ensure that users can only manage their own data.

📂 Project Structure
thinkboard/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── assets/
│   └── preview_notesapp.jpg
│
└── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/thinkboard.git
cd thinkboard

2. Backend Setup

Navigate to the server directory:

cd server


Install dependencies:

npm install


Create a .env file inside the server directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key


Replace the values with your own MongoDB connection string and secret key.

Start the backend server:

npm start

3. Frontend Setup

Open another terminal and navigate to the client directory:

cd client


Install dependencies:

npm install


Start the frontend:

npm start

🌐 Application Flow
                    ┌──────────────┐
                    │   Register   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │     Login    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  Dashboard   │
                    └──────┬───────┘
                           │
                           ▼
                  ┌───────────────────┐
                  │   Personal Notes  │
                  └─────────┬─────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
           Create          Edit         Delete
            Note            Note          Note

🔒 Security

ThinkBoard uses authentication and authorization to protect user data.

🔐 Authentication is required to access protected features.
👤 Each note belongs to a specific user.
🛡️ Protected API routes prevent unauthorized access.
🚫 Users cannot manage notes belonging to other users.
🔑 Sensitive configuration values are stored in environment variables.
🍃 MongoDB is used for persistent data storage.
📱 Responsive Design

ThinkBoard is designed to provide a consistent experience across different devices.

💻 Desktop
💻 Laptop
📱 Mobile
📲 Tablet
🔮 Future Improvements
🔍 Search notes
🏷️ Categories and tags
📌 Pin important notes
⭐ Favorite notes
🗂️ Filter and sort notes
🖼️ Image attachments
🔔 Note reminders
👤 User profile management
🔄 Password reset
📊 Improved dashboard

👨‍💻 Author
Ranajoy Dutta

⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub!
