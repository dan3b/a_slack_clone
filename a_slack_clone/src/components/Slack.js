import React from 'react';

import MessageBox from './MessageBox';

// default messages on page - eg messages
export default class Slack extends React.Component{
	constructor(){
		super();
		this.state = {
			messages: [
				{
					id:1,
					sender: 'John',
					text: 'Hello',
					time: 1593064048589
				},
				{
					id:2,
					sender: 'Adam',
					text: 'Hello, how are you',
					time: 1593064038589
				}
			]
		}
	}


	render(){
		return(
			<MessageBox messages={this.state.messages}/>
		)
	}
}

export default Slack;