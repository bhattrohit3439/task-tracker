import React, { useState } from 'react';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Footer from './Footer';

function TaskTracker() {
	const [taskId, setTaskId] = useState(0);
	const [taskList, updateTaskList] = useState([]);
	const onAdd = (task, dateTime, status) => {
		updateTaskList((oldTask) => [...oldTask, { taskId, task, dateTime, status }]);
		setTaskId(taskId + 1);
	};
	const deleteTask = (id) => {
		updateTaskList(taskList.filter((items) => items.taskId !== id));
	};

	return (
		<div className='container'>
			<Header title='Task Tracker' />
			<AddTask onSubmit={onAdd} key={taskId} />
			<TaskList tasks={taskList} taskDeleted={deleteTask} />
			<Footer />
		</div>
	);
}

export default TaskTracker;
