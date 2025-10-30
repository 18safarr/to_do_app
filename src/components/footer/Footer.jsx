import styles from './Footer.module.css';
export const Footer = ({countDone}) => {
	if (countDone) {
		return (
			<footer className={styles.footer}>
				Avec ToDoApp tu as fini {countDone} tâche{countDone>=2 ?"s":""} !
			</footer>
		);
	}
	return (
		<> </>
	)

}