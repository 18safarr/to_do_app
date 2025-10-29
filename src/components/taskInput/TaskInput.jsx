import styles from './TaskInput.module.css';
export const TaskInput = () => {
	const placeHolder = "indiquer une titre de tache explicite"
	return (
		<div className={styles.container}>
			<h2>Ajouter ta prochaine tache</h2>
			<form>
				<input type="text" className={styles.inputField} placeholder={placeHolder}/>
				<button className={styles.addBtn} type="submit">Ajouter</button>
			</form>

		</div>
	);
}