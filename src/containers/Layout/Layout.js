import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		sideDrawerIsVisible: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({
			sideDrawerIsVisible: false
		});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerIsVisible: !prevState.sideDrawerIsVisible };
		});
	}

	render () {
		return (
			<React.Fragment>
				<Toolbar onMenuClick={this.sideDrawerToggleHandler} />
				<SideDrawer
					isVisible={this.state.sideDrawerIsVisible}
					onClose={this.sideDrawerClosedHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</React.Fragment>
		)
	}
};

export default Layout;
