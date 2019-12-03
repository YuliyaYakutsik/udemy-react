import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.isVisible !== this.props.isVisible || nextProps.children !== this.props.children;
	}

	render() {
		return (
			<React.Fragment>
				<Backdrop
					isVisible={this.props.isVisible}
					onClick={this.props.onModalClose} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.isVisible ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.isVisible ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</React.Fragment>
		)
	}
}

export default Modal;
