import styles from "./TaskList.module.css"
import {TaskItem} from "../taskItem/TaskItem.jsx";

export const TaskList = () => {
	const item = {
		taskNum : 2,
		taskName : "il faut coder "
	}
	return (
		<div className={styles.container}>
			<h3>📋 Il te reste encore <span className="number-primary">2</span> tâches à accomplir</h3>
			<ul className={styles.listItems}>
				<TaskItem {...item}/>
				<TaskItem {...item}/>
				<TaskItem {...item}/>
			</ul>
		</div>
	)
}