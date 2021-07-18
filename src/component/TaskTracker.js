import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Footer from './Footer';
import About from './About';

function TaskTracker() {
	const [id, setId] = useState(0);
	const [taskList, updateTaskList] = useState([]);
	const [toggleAdd, setTogggleAdd] = useState(false);

	useEffect(() => {
		const getTasks = async () => {
			const taskFromServer = await fetchTasks();
			updateTaskList(taskFromServer);
		};

		getTasks();
	}, []);

	// fetch tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();

		return data;
	};

	// fetch task with id
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();

		return data;
	};

	const onAdd = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();

		updateTaskList((oldTask) => [...oldTask, data]);
		setId(id + 1);
	};

	const deleteTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'DELETE',
		});

		res.status === 200
			? updateTaskList(taskList.filter((items) => items.id !== id))
			: alert('Error deleting the task');
	};

	const toggleAddClose = () => {
		setTogggleAdd(!toggleAdd);
	};

	const onToggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);

		const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(updateTask),
		});

		const data = await res.json();

		updateTaskList(taskList.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
	};

	return (
		<Router>
			<div className='container'>
				<Header title='Task Tracker' onToggleBtn={toggleAddClose} value={toggleAdd} />

				<Route
					path='/'
					exact
					render={(props) => (
						<>
							{toggleAdd && <AddTask onSubmit={onAdd} key={id} />}
							{taskList.length > 0 ? (
								<TaskList tasks={taskList} taskDeleted={deleteTask} onToggle={onToggleReminder} />
							) : (
								'No Task To Show.'
							)}
							<Footer />
						</>
					)}
				/>
				<Route path='/about' component={About} />
			</div>
		</Router>
	);
}

export default TaskTracker;
