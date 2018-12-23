import React, { Component } from 'react';

// Style
import './style/Stars.scss';

class Stars extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	};
	generateValue = (range, adj = 0, round = true) => {
		return round ? adj + Math.round(range * Math.random()) : adj + range * Math.random();
	};
	renderStyle = () => {
		const size = this.generateValue(2, 3);
		return {
			position: 'absolute',
			left: this.generateValue(this.state.width),
			top: this.generateValue(this.state.height),
			backgroundColor: `rgba(255,255,255,${this.generateValue(0.5, 0.3, false)})`,
			width: size,
			height: size,
			borderRadius: size / 2
		};
	};
	render() {
		const { count } = this.props;
		return (
			<div className="stars">
				{Array.apply(null, Array(count)).map((obj, i) => (
					<div key={i} className="stars__star" style={this.renderStyle()} />
				))}
			</div>
		);
	}
}

export { Stars };
