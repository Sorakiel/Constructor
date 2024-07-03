import React, { useState } from 'react'
export function PickUploader({ isVisible, setIsVisible }) {
	const [selectedImage, setSelectedImage] = useState(null)
	return (
		<div>
			{selectedImage && (
				<div>
					<img
						alt='not found'
						src={URL.createObjectURL(selectedImage)}
						className='photo'
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
			<div className={'uploader-wrapper'}>
				<label
					className={isVisible ? 'uploader' : 'vanish uploader'}
					for='pic-upload'
				>
					Загрузить фото
				</label>
			</div>
			<input
				className={'vanish'}
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
