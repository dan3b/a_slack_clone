import React from 'react';
import './slack.css';
import Message from './Message';
import messageData from './MessageData';

export default class MessageBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages: props.messages,
			input: ''
		}
	}

	messageInput = (e) =>{
		let input = e.target.value
		this.setState({input})
	};
	messageSend = () => {
		let message = {
			id: this.state.messages.length+1,
			sender: 'Me',
			text: this.state.input,
			time: new Date().getTime()
		}
		let messages = [...this.state.messages,message]
		this.setState({messages, input:''})
		localStorage.setItem('messages', JSON.stringify(messages))
	};
	clear = () => {
		this.setState({messages: []})
		localStorage.clear()
	}

	componentDidMount(){
		if(this.state.messages.length === 0){
			let messages = localStorage.getItem('messages')
			if(messages){
				this.setState({messages: JSON.parse(messages)})
			}else{
				this.setState({messages: messageData})
			}
		}
	}

	render(){
		return(
			<div>
				<button onClick={this.clear}>clear history</button>
				<div className='messageArea'>
					{
						this.state.messages.map(message=>
							<Message key={message.id} data={message} mine={message.sender === 'Me'} />
						)
					}
				</div>
				<div className='messageInput'>
					<textarea 
						rows="3" 
						cols="150" 
						className='msgInput'
						onChange={this.messageInput}
						value={this.state.input}
					>
					</textarea>
					<button 
						className='sendBtn'
						onClick={this.messageSend}
					>
						send
					</button>
				</div>
			</div>


		)
	}
}