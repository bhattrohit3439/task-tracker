import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import '../index.css';

const Header = ({ title, onToggleBtn, value }) => {
	const location = useLocation();

	return (
		<div className='header'>
			<div style={{ fontSize: '30px', fontWeight: 'bolder' }}>{title}</div>
			{location.pathname === '/' && (
				<Button color={value ? 'red' : 'green'} text={value ? 'CLOSE' : 'ADD'} onClick={onToggleBtn} />
			)}
		</div>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
