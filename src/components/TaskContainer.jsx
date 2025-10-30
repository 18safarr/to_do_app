import {Header} from "./header/Header.jsx";
import {TaskInput} from "./taskInput/TaskInput.jsx";
import {TaskList} from "./taskList/TaskList.jsx";
import {Footer} from "./footer/Footer.jsx";
import {useState} from "react";

export const TaskContainer = () => {
	const [tasks, setTasks] = useState([]);

	const actions = {
		addTask:  (title) => {
			const newTask = {id: tasks.length+1, title: title, isDone: false}
			setTasks([...tasks, newTask]);
		},
		deleteTask:  (id) => {
			const newsTasks = tasks.filter(task => task.id !== id);
			setTasks(newsTasks);
		},
		changeStatus:  (id,status) => {
			const newTasks = tasks.map((task) =>
				task.id === id ? { ...task, isDone: status } : task
			);
			setTasks(newTasks);
		},
		getCountTasks : ()=>{
			const countTasksDone = tasks.filter(task => task.isDone).length;
			const countTasksUndone = tasks.length - countTasksDone;
			return {countTasksDone, countTasksUndone};
		}
	}
	const {countTasksDone, countTasksUndone} = actions.getCountTasks()
	return (
		<main>
			<Header />
			<TaskInput addTask={actions.addTask} />
			<TaskList
				deleteTask={actions.deleteTask}
				changeStatus={actions.changeStatus}
				allTaks={tasks}
				countUndone={countTasksUndone}
			/>
			<Footer />
		</main>
	)
}