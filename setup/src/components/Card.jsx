import React from 'react';
import './Card.css';

const Card = ({ title = 'Card Title', children = 'This is an example card. Replace this text with anything you like.' }) => {
	function clickHandler(){
		alert("Clicked the tag..");
	}
	return (
		<div className='card-container'>
			<div className="card" role="article" aria-label={title}>
				It is the card component
				changes are made here to see the git status and git diff working properly
			</div>
			<button className='btn'> Sign in</button>

			<label>
				<input type="checkbox" /> Subscribe
			</label>
			<br />
			<br></br>

			<form>
				<label>Enter Name: 
				<input type="text" placeholder='Enter your name' />
				</label>
	

			</form>
			<br></br>

			<button>Submit</button>
			<br />
			<br></br>
			<a href='https://javascript.info/'  target='_blank' onClick={clickHandler}> Learn Javascript</a>


			<br />
			<br></br>
			<input type='file' id='fileInput'></input>

		</div>

	);
};

export default Card;


// some changes are made to see t
// 1
// 2
// 3
// 4
// 5