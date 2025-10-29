import styles from './TaskInput.module.css';
import {useState} from "react";
export const TaskInput = ({addTask}) => {
	const placeHolder = "indiquer une titre de tache explicite";
	const [taskTitle, setTaskTitle] = useState("");
	const handleInputChange = (e) => {
		setTaskTitle(e.target.value);
	}
	const handleAddTask = (e) => {
		e.preventDefault();
		const title = taskTitle.trim();
		if (title) {
			addTask(title);
			setTaskTitle("");
		}else {
			console.log("le titre de la tache est vide");
		}

	}
	return (
		<div className={styles.container}>
			<h2>Ajouter ta prochaine tache</h2>
			<form onSubmit={handleAddTask}>
				<input
					type="text"
					onChange={handleInputChange}
					className={styles.inputField}
					placeholder={placeHolder}
					value={taskTitle}
				/>
				<button className={styles.addBtn} type="submit" >Ajouter</button>
			</form>

		</div>
	);
}