import styles from "./TaskList.module.css"
import {TaskItem} from "../taskItem/TaskItem.jsx";

export const TaskList = ({deleteTask, changeStatus, allTaks,countUndone}) => {
	return (
		<div className={styles.container}>
			<h3>📋 Il te reste encore <span className="number-primary">{countUndone}</span> tâche{countUndone>=2 ?"s":""} à accomplir</h3>
			<ul className={styles.listItems}>
				{allTaks.map((task, index) => (
					<TaskItem
						key={task.id}
						{...task}
						delTask={deleteTask}
						changeStatus = {changeStatus}
					/>
				))}
			</ul>
		</div>
	)
}