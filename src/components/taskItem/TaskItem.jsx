import styles from './TaskItem.module.css';
import {useState} from "react";
export const TaskItem = ({id, title,isDone,delTask,changeStatus}) => {
	const [styleTitle,setStyleTitle] = useState(styles.undone);

	const handlerChangeStyleTitle = (e) => {
		setStyleTitle(styleTitle===styles.done ? styles.undone : styles.done);
		changeStatus(id, !isDone);
	}
	return (
		<li
			className={styles.container}
			onClick={handlerChangeStyleTitle}
		>
			<div className={styles.taskElement}>
				<span className="number-primary">{id}</span>
				<h4 className={styleTitle}>{title}</h4>
			</div>
			{/*<span className={styles.itemText}>Item</span>*/}
			<button className={styleTitle} >🗑️</button>

		</li>
	)
}