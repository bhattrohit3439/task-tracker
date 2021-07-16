import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const Header = ({ title }) => {
	return (
		<div className='header'>
			<div style={{ fontSize: '30px', fontWeight: 'bolder' }}>{title}</div>
			<Button color='green' text='ADD' />
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
