import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
	<React.Fragment>
		<Backdrop
			isVisible={props.isVisible}
			onClick={props.onModalClose} />
		<div
			className={classes.Modal}
			style={{
				transform: props.isVisible ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.isVisible ? '1' : '0'
			}}>
			{props.children}
		</div>
	</React.Fragment>
);

export default Modal;
