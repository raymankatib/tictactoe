import React, { useContext, useState } from 'react';
import { Box, Text, Grid, GridItem, Button, border } from '@chakra-ui/react';

import { GameContext } from './Main';

export default function Board() {
	const { user, setUser } = useContext(GameContext);

	const [boardList, setBoardList] = useState([...Array(9)]);
	const [winner, setWinner] = useState('');

	const isGameWon = (board) => {
		// list of postion that is winning
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		// checking each of the postition seeing if the combination is there
		// if it does return the True
		// else return false
		for (let i = 0; i < lines.length; i++) {
			let [a, b, c] = lines[i];
			//console.log(board[a] === board[b] && board[a] === board[c])
			if (board[a] !== undefined && board[a] === board[b] && board[a] === board[c]) {
				setWinner(user);
				return true;
			}
		}

		if (!winner && !board.includes(undefined)) {
			setWinner('No one');
		}
		return false;
	};

	const BoardItem = ({ index, player }) => {
		function handleItemClicked() {
			if (winner) return;
			//check if selected box is empty
			if (boardList[index] !== undefined) {
				return;
			}

			// add the player move to the board list
			const boardListCopy = [...boardList];
			boardListCopy[index] = user;

			//Change cuurent user
			setBoardList(boardListCopy);
			isGameWon(boardListCopy);

			setUser(user === 'X' ? 'O' : 'X');
		}

		return (
			<GridItem
				style={{ cursor: 'pointer' }}
				onClick={handleItemClicked}
				colSpan={1}
				d="flex"
				justifyContent="center"
				alignItems="center"
				w="150px"
				h="150px"
				bg="papayawhip"
				fontWeight="bold"
				fontSize="100px"
				color=""
			>
				{player}
			</GridItem>
		);
	};

	const Reset = () => {
		return (
			<Button
				m="5px"
				w="100px"
				bg="tomato"
				onClick={() => {
					setBoardList([...Array(9)]);
					setUser('X');
					setWinner('');
				}}
			>
				Reset
			</Button>
		);
	};

	return (
		<Box>
			<Box>
				<Text color="gray" fontSize="4xl">
					{user} Turn!
				</Text>
				<Text color="gray" fontSize="4xl">
					{winner ? `${winner} won the game` : 'Game in progress...'}
				</Text>
				<Reset />
			</Box>
			<Grid
				width="500px"
				h="500px"
				bg="tomato"
				p={3}
				templateRows="repeat(3, 1fr)"
				templateColumns="repeat(3, 1fr)"
				gap={1}
			>
				{boardList.map((item, i) => {
					return <BoardItem key={i} index={i} player={item} />;
				})}
			</Grid>
		</Box>
	);
}
