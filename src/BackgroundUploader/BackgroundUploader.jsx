import React, { useState } from 'react'
export function BackgroundUploader({ isVisible, setIsVisible }) {
	const [selectedBackground, setSelectedBackground] = useState(null)
	const setBackground = bgName => {
		const background = document.getElementById('main-wrapper')
		const inputValue = document.getElementById('bg-upload')
		console.log(inputValue)
		const val = inputValue

		if (background) {
			background.style.backgroundImage = `url('${bgName}') `
		}
	}
	return (
		<>
			<div>
				{selectedBackground && (
					<div>
						<img
							alt='not found'
							width='200px'
							src={URL.createObjectURL(selectedBackground)}
							className='photo'
						/>
					</div>
				)}
				<div className={'uploader-wrapper'}>
					<label
						className={isVisible ? 'uploader' : 'vanish uploader'}
						for='bg-upload'
					>
						Загрузить фон
					</label>
				</div>
				<input
					className={'vanish'}
					type='file'
					id='bg-upload'
					onChange={event => {
						const bgName = event.target.files[0].name
						console.log('Путь к файлу:' + bgName)
						setBackground(bgName)
						console.log('Background uploaded')
						setSelectedBackground(event.target.files[0])
					}}
				/>
			</div>
		</>
	)
}
