import {Header} from "./header/Header.jsx";
import {TaskInput} from "./taskInput/TaskInput.jsx";
import {TaskList} from "./taskList/TaskList.jsx";
import {Footer} from "./footer/Footer.jsx";
import {useState} from "react";

export const TaskContainer = () => {
	const [tasks, setTasks] = useState([{
		id: 1,
		title: "Task 1",
		isDone: false
	}]);
	const actions = {
		addTask:  (title) => {
			tasks.push({id: tasks.length+1, title: title, isDone: false});
		},
		deleteTask:  (id) => {
			tasks.splice(id, 1);
		},
		changeStatus:  (id,status) => {
			tasks[id].status = status;
		},
		getAllTasks: () => {
			return tasks;
		}
	}
	return (
		<main>
			<Header />
			<TaskInput addTask={actions.addTask} />
			<TaskList />
			<Footer />
		</main>
	)
}