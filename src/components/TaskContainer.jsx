import {Header} from "./header/Header.jsx";
import {TaskInput} from "./taskInput/TaskInput.jsx";
import {TaskList} from "./taskList/TaskList.jsx";
import {Footer} from "./footer/Footer.jsx";
import {useEffect, useState} from "react";

export const TaskContainer = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}



	}, []);
	const saveTaskOnLocalStorage = (tasks) => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}
	const actions = {
		addTask:  (title) => {
			const idTast = tasks.length ? tasks[tasks.length-1].id + 1 : 1;
			const newTask = {id: idTast, title: title, isDone: false}
			const newsTasks = [...tasks, newTask]
			setTasks(newsTasks);
			saveTaskOnLocalStorage(newsTasks);
		},
		deleteTask:  (id) => {
			const newsTasks = tasks.filter(task => task.id !== id);
			setTasks(newsTasks);
			saveTaskOnLocalStorage(newsTasks);
		},
		changeStatus:  (id,status) => {
			const newTasks = tasks.map((task) =>
				task.id === id ? { ...task, isDone: status } : task
			);
			setTasks(newTasks);
			saveTaskOnLocalStorage(newTasks);
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
			<Footer countDone={countTasksDone} />
		</main>
	)
}