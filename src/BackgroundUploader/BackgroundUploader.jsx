import React from 'react'
export function BackgroundUploader({ isVisible, setIsVisible }) {
	return (
		<>
			<div>
				<label
					className={isVisible ? 'uploader' : 'vanish uploader'}
					for='bg-upload'
				>
					Загрузить фон
				</label>
				<input
					className={
						isVisible ? 'vanish subEditButton' : 'vanish subeditButton'
					}
					type='file'
					id='bg-upload'
					onChange={event => {}}
				/>
			</div>
		</>
	)
}
