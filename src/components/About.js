import React from 'react'
export default function About() {
  return (
    <div>
      <h1>About this project</h1>
      <p>This is a full-stack web application built using React for the frontend, Node.js and Express for the backend, and MongoDB as the database. The app allows users to create, read, update, and delete notes. It also has authentication and authorization features, so users can log in and only see their own notes.</p>
      <p>The app uses a RESTful API to communicate between the frontend and backend. The backend is built with Node.js and Express, and uses MongoDB as the database. The frontend is built with React and uses React Router for client-side routing.</p>
      <p>The app also has authentication and authorization features. Users can log in and only see their own notes. This is implemented using JSON Web Tokens (JWT) for authentication and authorization.</p>
    </div>
  )
}

