import {Header} from "./header/Header.jsx";
import {TaskInput} from "./taskInput/TaskInput.jsx";
import {TaskList} from "./taskList/TaskList.jsx";
import {Footer} from "./footer/Footer.jsx";

export const TaskContainer = () => {
	return (
		<main>
			<Header />
			<TaskInput />
			<TaskList />
			<Footer />
		</main>
	)
}