import { forwardRef, useEffect, useState } from 'react';
import Headers from './headers';
import Cell from './cell';


function TableBlock({ columns, data, onChange }, ref) {

	return(
		<table>
			<thead>
				<Headers columns={columns} />
			</thead>
			<tbody>
				{data.map((row, rowIndex) =>(
					<tr key={crypto.randomUUID()}>
						{columns.map((cell, cellIndex) => (
							<Cell
								key={crypto.randomUUID()} 
								text={row[cell].toString() ?? ''}
								onchange={(value) => onChange(rowIndex, cell, value)} 
								canBeEdited={columns[cellIndex] !== 'id'}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default forwardRef(TableBlock);