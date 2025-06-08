# Full Stack Realtime Chat App

A modern, full-featured real-time chat application built with the MERN stack, Socket.io, TailwindCSS, and DaisyUI.

## 🚀 Features

- 🎃 **Authentication & Authorization**: Secure login/signup with JWT.
- 👾 **Real-time Messaging**: Instant chat powered by Socket.io.
- 🚀 **Online User Status**: See who's online in real-time.
- 🖼️ **Image Sharing**: Send and receive images in chat.
- 🎨 **Theme Switching**: Choose from multiple beautiful DaisyUI themes.
- 👤 **Profile Management**: Update your profile and avatar.
- 👌 **Global State Management**: Powered by Zustand.
- 🐞 **Robust Error Handling**: On both client and server.
- 💻 **Responsive UI**: Built with TailwindCSS & DaisyUI for a seamless experience.

## 🛠️ Tech Stack

- **Frontend**: React, Zustand, TailwindCSS, DaisyUI, Socket.io-client
- **Backend**: Node.js, Express, MongoDB, Mongoose, Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Image Uploads**: Cloudinary
- **Other**: Vite, ESLint

## 📦 Project Structure

```
backend/
  ├── src/
  │   ├── controllers/
  │   ├── lib/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   └── seeds/
  ├── package.json
  └── .env

frontend/
  ├── src/
  │   ├── components/
  │   ├── constants/
  │   ├── lib/
  │   ├── pages/
  │   ├── store/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── public/
  ├── package.json
  └── .env
```

## ⚡ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/mdsaifalidev/Full-Stack-Realtime-Chat-App.git
cd fullstack-chat-app
```

### 2. Setup Backend

```sh
cd backend
npm install
# Create a .env file (see .env.example or backend/.env)
npm run dev
```

### 3. Setup Frontend

```sh
cd ../frontend
npm install
npm run dev
```

### 4. Open your browser

Visit [http://localhost:5173](http://localhost:5173) to use the app.