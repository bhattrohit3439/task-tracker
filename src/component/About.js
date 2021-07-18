import { Link } from 'react-router-dom';
import '../index.css';

const About = () => {
	return (
		<div className='about'>
			<p style={{ marginBottom: '30px', fontSize: '18px', fontStyle: 'italic', color: 'gray' }}>
				" An app to <strong>Add</strong> and <strong>Delete</strong> your tasks. You can also set a task
				priority or recommended by double clicking the task. "
			</p>
			<h2>Version 1.0.0</h2>
			<p>Copyright &#169; tracker.inc</p>
			<Link to='/'>Go Back</Link>
		</div>
	);
};

export default About;
