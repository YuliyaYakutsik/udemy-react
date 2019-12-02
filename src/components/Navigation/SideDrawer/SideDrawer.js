import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (props.isVisible) {
		attachedClasses =[classes.SideDrawer, classes.Open];
	}

	return (
		<React.Fragment>
			<Backdrop isVisible={props.isVisible} onClick={props.onClose}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;
