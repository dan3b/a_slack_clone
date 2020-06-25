import React from 'react';
import './Message.css'

export default class Message extends React.Component{
	constructor(){
		super()
		this.state={}
	}

	convertDate(timeStamp){
		let time = new Date(timeStamp)
		return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
	}

	render(){
		const {data:{sender,text,time},mine} = this.props
		return(
			<div className={`message ${mine?'right':'left'}`}>
				<div className='face'>{sender}</div>
				<div>
					<div className='text'>{text}</div>
					<div className='time'>{this.convertDate(time)}</div>
				</div>

			</div>

		)
	}



}