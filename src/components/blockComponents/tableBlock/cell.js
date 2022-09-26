import { forwardRef, useEffect, useState, useRef } from 'react';
import Input from '../../input';
import './table.css';

export default function Cell({ text, onchange, canBeEdited }) {

	const [editable, setEditable] = useState(false);
	const [value, setValue] = useState(text);

	const ref = useRef(null);

	useEffect(() => {
		setValue(text);
	}, [text]);

	useEffect(() => {
		if(ref.current) {
			ref.current.focus();
		}
	}, [editable]);

	function handleOnDoubleClick() {
		setEditable(true);
		ref.current.focus();
	}

	function handleOnChange(e) {
		setValue(e.target.value);
	}

	function handleOnBlur() {
		onchange(value);
		setEditable(false);
	}

	function handleOnKeyDown(e) {
		if(e.key === 'Enter') {
			e.target.blur();
		}
	}

	return editable && canBeEdited ? (
		<td>
			<Input 
				ref={ref} 
				value={value} 
				onChange={handleOnChange} 
				onBlur={handleOnBlur}
				onKeyDown={handleOnKeyDown}>
			</Input>
		</td>
	) : ( 
		<td onDoubleClick={handleOnDoubleClick} key={crypto.randomUUID()}>
			{value}
		</td>
	);
}