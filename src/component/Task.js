import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggleReminder }) => {
	return (
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
			<h3>
				{task.task}
				<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.dateTime}</p>
		</div>
	);
};

export default Task;
