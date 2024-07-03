import React, { useState } from 'react'
/**
 * export const Component1: React.FC = () => {}
 *
 */
export function Content({ isVisible, setIsVisible }) {
	const [texts, setTexts] = useState([])
	const [textContent, setTextContent] = useState('')
	const addText = event => {
		if (textContent != 0) {
			setTexts([...texts, { content: textContent }])
			setTextContent('')
		}
	}

	const removeText = event => {
		if (texts.length !== 0) {
			setTexts(texts.slice(0, -1))
		}
	}

	const editText = index => {
		console.log(index)
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
							<li id={index}>{text.content}</li>
							<button
								//TODO: доделать редактирование
								onClick={editText({ index })}
								className={isVisible ? 'subEditButton' : 'vanish editButton'}
							>
								✎
							</button>
						</>
					))}
				</ul>
			</div>
		</>
	)
}
