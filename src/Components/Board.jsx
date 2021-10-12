import React, { useContext, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import { GameContext } from './Main';

export default function Board() {
	const { user, setUser } = useContext(GameContext);

	const [boardList, setBoardList] = useState([...Array(9)]);

	const BoardItem = ({ index, player }) => {
		function handleItemClicked() {
			//check if selected box is empty
			if (boardList[index] !== undefined) {
				return;
			}

			// add the player move to the board list
			const boardListCopy = [...boardList];
			boardListCopy[index] = user;

			//Change cuurent user
			setUser(user === 'X' ? 'O' : 'X');

			setBoardList(boardListCopy);
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

	return (
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
	);
}
