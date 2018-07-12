import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddBtn = styled.div`
	width: 70px;
	height: 70px;
	margin-top: 15px;
	border-radius: 50px;
	background-color: pink;
	font-size: 60px;
	display: flex;
 justify-content: center;
`
//Клик на кнопку добавить
StyledAddBtn.addEventListener('click' () => {
	StyledAddBtn.style.display = 'none';
})

class AddBtn extends React.Component {
 constructor(props)


export default AddBtn