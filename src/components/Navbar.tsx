'use client';

import { usePathname } from 'next/navigation';
import SVG from 'react-inlinesvg';
import cx from 'classnames';

import { Link } from './Link';
import { SiteTheme, useSiteTheme } from '../hooks/useSiteTheme';
import logoLight from '../img/logo.svg';
import logoDark from '../img/logo-inverted.svg';
import lightIcon from '../img/light-mode-icon.svg';
import darkIcon from '../img/dark-mode-icon.svg';
import styles from '$styles/navbar.module.css';

type Props = {
	siteTheme: SiteTheme;
	setSiteTheme: (_st: SiteTheme) => void;
};

const Switch = (p: Props) => {
	// @ts-ignore
	const icon: string = p.siteTheme === 'light' ? lightIcon.src : darkIcon.src;
	return (
		<label htmlFor="site-theme">
			<div className={styles.switchContainer}>
				<SVG className={styles.switchIcon} src={icon} />
			</div>
			<input
				id="site-theme"
				type="checkbox"
				hidden
				checked={p.siteTheme === 'dark'}
				onChange={() => {
					p.setSiteTheme(p.siteTheme === 'light' ? 'dark' : 'light');
				}}
			/>
		</label>
	);
};

const Navbar = () => {
	const pathname = usePathname();
	const [theme, setTheme] = useSiteTheme();

	return (
		<nav className={styles.nav}>
			<div className={styles.navBrand}>
				<Link className={styles.brandLink} to="/" ariaLabel="my logo">
					<SVG
						className={styles.brandLogo}
						src={theme === 'light' ? logoLight.src : logoDark.src}
					/>
				</Link>
			</div>
			<div className={styles.siteThemeToggle}>
				<Switch siteTheme={theme} setSiteTheme={setTheme} />
			</div>
			<div>
				<Link
					className={cx(styles.navLink, {
						[styles.active]: pathname === '/blog'
					})}
					to="/blog"
				>
					Blog
				</Link>
				<Link
					className={cx(styles.navLink, {
						[styles.active]: pathname === '/projects'
					})}
					to="/projects"
				>
					Projects
				</Link>
				<Link
					className={cx(styles.navLink, {
						[styles.active]: pathname === '/resume'
					})}
					to="/resume"
				>
					Resume
				</Link>
				<Link
					className={cx(styles.navLink, {
						[styles.active]: pathname === '/contact'
					})}
					to="/contact"
				>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
