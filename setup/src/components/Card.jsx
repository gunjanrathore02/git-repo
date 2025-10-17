import React from 'react';
import './Card.css';

const Card = ({ title = 'Card Title', children = 'This is an example card. Replace this text with anything you like.' }) => {
	return (
		<div className="card" role="article" aria-label={title}>
			<h3 className="card__title">{title}</h3>
			<p className="card__body">{children}</p>
		</div>
	);
};

export default Card;
//forking- SSH , HTTPS 
// resting renaming rebasing managing
// origin impotance in forking 

// some changes are made to see the working of git commit -am 