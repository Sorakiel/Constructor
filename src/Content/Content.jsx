import React, { useState } from 'react'
export function Content({ isVisible, setIsVisible }) {
	const [texts, setTexts] = useState([])
	const [textContent, setTextContent] = useState('')
	const [editIndex, setEditIndex] = useState(null)

	const addText = event => {
		if (textContent.trim() !== '') {
			setTexts([...texts, { content: textContent }])
			setTextContent('')
		}
	}

	const removeText = event => {
		if (texts.length !== 0) {
			setTexts(texts.slice(0, -1))
		}
	}

	const startEdit = index => {
		setTextContent(texts[index].content)
		setEditIndex(index)
	}

	const finishEdit = () => {
		if (editIndex !== null) {
			if (textContent != 0) {
				const newTexts = [...texts]
				newTexts[editIndex].content = textContent
				setTexts(newTexts)
				setTextContent('')
				setEditIndex(null)
			}
		}
	}

	return (
		<>
			<div>
				<input
					type='text'
					value={textContent}
					onChange={e => setTextContent(e.target.value)}
					className={isVisible ? 'textForm' : 'vanish textForm'}
				/>
				<button
					onClick={addText}
					className={isVisible ? 'subEditButton' : 'vanish editButton'}
				>
					Добавить текст
				</button>
				<button
					onClick={removeText}
					className={isVisible ? 'subEditButton' : 'vanish editButton'}
				>
					Удалить текст
				</button>
				<ul>
					{texts.map((text, index) => (
						<>
							<li key={index}>{text.content}</li>
							<button
								onClick={() => startEdit(index)}
								className={isVisible ? 'subEditButton' : 'vanish editButton'}
							>
								✎
							</button>
						</>
					))}
				</ul>
				{editIndex !== null && (
					<button onClick={finishEdit}>Сохранить изменения</button>
				)}
			</div>
		</>
	)
}
