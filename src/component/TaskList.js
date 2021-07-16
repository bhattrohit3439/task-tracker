import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, taskDeleted }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task task={task} key={task.taskId} onDelete={taskDeleted} />
			))}
		</>
	);
};

export default TaskList;
