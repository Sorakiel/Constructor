import React, { useState } from 'react'
export function PickUploader({ isVisible, setIsVisible }) {
	const [selectedImage, setSelectedImage] = useState(null)
	return (
		<div>
			{selectedImage && (
				<div>
					<img
						alt='not found'
						width={'250px'}
						src={URL.createObjectURL(selectedImage)}
					/>
					<button
						className={isVisible ? 'subEditButton' : 'vanish subeditButton'}
						onClick={event => {
							setSelectedImage(null)
							console.log('Image deleted')
						}}
					>
						Удалить фото
					</button>
				</div>
			)}
			<label className={isVisible ? '' : 'vanish'} for='pic-upload'>
				Загрузить фото
			</label>
			<input
				className={isVisible ? 'vanish subEditButton' : 'vanish subeditButton'}
				type='file'
				id='pic-upload'
				onChange={event => {
					console.log('Image uploaded')
					setSelectedImage(event.target.files[0])
				}}
			/>
		</div>
	)
}
