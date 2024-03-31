# QuadB-Assignment

# React To-Do Application

This is a simple To-Do application built using React and Redux. It allows users to add, view, mark as completed, and delete tasks. Additionally, tasks are persisted using local storage, ensuring that they are not lost on page reload.

## Features

1. **Add Task**: Users can add tasks to the list by entering text and clicking the "Add Task" button.

2. **View Task**: Tasks are displayed in a list format, showing the task text. Users can click on a task to mark it as completed or delete it.

3. **Mark as Completed**: Tasks can be marked as completed by clicking on them. Completed tasks are visually differentiated from active tasks.

4. **Delete Task**: Each task has a delete button that, when clicked, removes the task from the list.

5. **Persistent Storage**: Tasks are saved to local storage, ensuring that they persist even after the page is reloaded.

## Technologies Used

- React: Frontend library for building user interfaces.
- Redux: State management library for managing application state.
- HTML/CSS: Used for structuring the layout and styling the application.
- JavaScript (ES6+): Programming language for implementing application logic.
- Local Storage API: Used for persistent storage of tasks.

## How to Run

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Folder Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Contains React components.
  - `redux/`: Contains Redux actions, reducers, and store configuration.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
