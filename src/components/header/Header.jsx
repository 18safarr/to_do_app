import styles from './Header.module.css'
import logoReact from '../../assets/react.svg'
export const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<img src={logoReact} alt="logo" width={50} height={50} />
				<div>
					<h1>ToDoApp</h1>
					<div>
						<code>Organiser votre vie</code>
					</div>
				</div>

			</div>
			<code className="color-primary">v1.0</code>
		</div>
	);
}