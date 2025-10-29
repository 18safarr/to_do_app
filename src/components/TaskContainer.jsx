import {Header} from "./header/Header.jsx";
import {TaskInput} from "./taskInput/TaskInput.jsx";
import {TaskList} from "./taskList/TaskList.jsx";

export const TaskContainer = () => {
	return (
		<main>
			<Header />
			<TaskInput />
			<TaskList />
		</main>
	)
}