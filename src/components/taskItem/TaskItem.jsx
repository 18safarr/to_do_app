import styles from './TaskItem.module.css';
export const TaskItem = ({taskNum, taskName}) => {
	return (
		<li className={styles.container}>
			<div className={styles.taskElement}>
				<span className="number-primary">{taskNum}</span>
				<h4>{taskName}</h4>
			</div>
			<span className={styles.itemText}>Item</span>
			<button className={styles.deleteButton}>🗑️</button>

		</li>
	)
}