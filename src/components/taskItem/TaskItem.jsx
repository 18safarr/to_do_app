import styles from './TaskItem.module.css';
import {useState} from "react";
export const TaskItem = ({id, title,isDone,delTask,changeStatus}) => {


	const handlerChangeStatus = (e) => {
		changeStatus(id, !isDone);
	}
	return (
		<li
			className={styles.container}
			onClick={handlerChangeStatus}
		>
			<div className={styles.taskElement}>
				<span className="number-primary">{id}</span>
				<h4 className={isDone? styles.done : styles.undone}>{title}</h4>
			</div>
			{/*<span className={styles.itemText}>Item</span>*/}
			<button  >🗑️</button>

		</li>
	)
}