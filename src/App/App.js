import { useState } from 'react'
import { BackgroundUploader } from '../BackgroundUploader/BackgroundUploader.jsx'
import { Content } from '../Content/Content.jsx'
import { PickUploader } from '../PickUploader/PickUploader.jsx'
import styles from './App.module.css'
export default function App() {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisible = () => {
		setIsVisible(!isVisible)
	}
	return (
		<>
			<div className={styles.header}>
				<img src='/images/ITC_LOGO.png' className={styles.logo} width={40} />
				<div className={styles.auth}>
					<button className={styles.authButton}>Войти</button>
					<button onClick={toggleVisible} className={styles.editButton}>
						✎
					</button>
				</div>
			</div>
			<Content isVisible={isVisible} setIsVisible={setIsVisible} />
			<PickUploader isVisible={isVisible} setIsVisible={setIsVisible} />
			<BackgroundUploader isVisible={isVisible} setIsVisible={setIsVisible} />
		</>
	)
}
