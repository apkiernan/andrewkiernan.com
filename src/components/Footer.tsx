import styles from '$styles/footer.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<span>&copy; Andrew Kiernan {new Date().getFullYear()}</span>
	</footer>
);

export default Footer;
