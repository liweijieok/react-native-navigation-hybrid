import React, { Component } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import styles from './Styles'

export default class Menu extends Component {

	constructor(props){
		super(props);
		this.push = this.push.bind(this);
		this.pushToRedux = this.pushToRedux.bind(this);
	}

	push() {
    this.props.navigator.closeMenu();
		this.props.navigator.push('OneNative');
	}

	pushToRedux() {
		this.props.navigator.closeMenu();
		this.props.navigator.push('Counter');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.welcome, {marginTop: 80}]}>
					This's a React Native Menu.
        </Text>

				<TouchableOpacity onPress={this.push} activeOpacity={0.2} style={styles.button}>
					<Text style={styles.buttonText}>
						push to native
          </Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.pushToRedux} activeOpacity={0.2} style={styles.button}>
					<Text style={styles.buttonText}>
						Redux Counter
          </Text>
				</TouchableOpacity>

			</View>
		);
	}
}