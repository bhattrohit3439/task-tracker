import Task from './Task';

const TaskList = ({ tasks, taskDeleted, onToggle }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task task={task} key={task.id} onDelete={taskDeleted} toggleReminder={onToggle} />
			))}
		</>
	);
};

export default TaskList;
