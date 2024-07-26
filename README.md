# Task-Manager
Projetct Description
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
The Task Manager project is a web application designed to help users manage their tasks efficiently.Built with React, it offers a user-friendly interface
for creating, updating, and deleting tasks.

Project Structure-----------------------------------------------------------

File: src/App.js
Imports: Import necessary React hooks, CSS file, and components.
State Management: Use useReducer for managing tasks, search, and filter state. Use useState for handling edit tasks and theme mode.
Reducer Function: Define how state updates for different actions like adding, editing, deleting tasks, toggling completion, searching, and filtering tasks.
Main Component: App component renders the header, task controls, search input, TaskForm, and TaskList components. It also manages the theme toggle.

File: src/TaskForm.js
Imports: Import necessary hooks and CSS.
Component: TaskForm handles form inputs for task title, description, due date, and priority. It supports adding new tasks and editing existing ones.

File: src/TaskList.js-------------------------------------------------------------------
Imports: Import necessary CSS.
Component: TaskList displays the list of tasks. Each task has options to edit, delete, and toggle completion.

File: src/App.css-----------------------------------------------------------
Styling: Contains the CSS for light and dark themes, task form, task list, and other UI elements.
Responsive Design: Includes media queries for better display on smaller screens.


Setup and Run Instructions---------------------------------
Prerequisites--
* Node.js(version 14.x or higher recommended)
* npm (Node Package Manager)

1. Clone the Repository
   https://github.com/nikhil7821/Task-Manager.git
   cd task-manager

2. Install Dependencies
npm install

3. Start the Development Server
npm start

* This will start the application on 'http://localhost:3000'.


Summary
The App.js file sets up the main structure and state management of the application.
The TaskForm.js component manages the input and submission of new tasks or edits to existing tasks.
The TaskList.js component displays the tasks and allows for interaction (edit, delete, toggle complete).
The App.css file provides styling for the components, including responsive design and theme switching.
