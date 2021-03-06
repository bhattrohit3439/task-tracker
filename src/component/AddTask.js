import { useState } from 'react';

const AddTask = ({ onSubmit }) => {
	const [task, setTask] = useState('');
	const [dateTime, setDateTime] = useState('');
	const [reminder, setReminder] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ task: task, dateTime: dateTime, reminder: reminder });
	};

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<div className='form-control'>
				<label htmlFor='task'>Task</label>
				<input
					type='text'
					name='task'
					value={task}
					onChange={(event) => setTask(event.target.value)}
					placeholder='Add Task'
				/>
			</div>

			<div className='form-control'>
				<label htmlFor='day-time'>Day & Time</label>
				<input
					type='datetime'
					name='day-time'
					value={dateTime}
					onChange={(event) => setDateTime(event.target.value)}
					placeholder='Add Day & Time'
				/>
			</div>

			<div className='form-control form-control-check'>
				<label htmlFor='reminder'>Set Priority</label>
				<input
					type='checkbox'
					name='reminder'
					defaultChecked={reminder}
					onChange={(event) => (event.target.checked ? setReminder(true) : setReminder(false))}
				/>
			</div>
			<button className='btn btn-block'>Save Task</button>
		</form>
	);
};

export default AddTask;
