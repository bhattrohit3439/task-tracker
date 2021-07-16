import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
	return (
		<div className={`task ${task.status ? 'reminder' : ''}`}>
			<h3>
				{task.task}
				<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.taskId)} />
			</h3>
			<p>{task.dateTime}</p>
		</div>
	);
};

export default Task;
