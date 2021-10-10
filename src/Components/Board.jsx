import React, { useContext } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import { GameContext } from './Main';

export default function Board() {
	const { user } = useContext(GameContext);

	function BoardItem({ index }) {
		function handleItemClicked() {
			console.log(index);
		}

		return (
			<GridItem onClick={handleItemClicked} colSpan={1} w="150px" h="150px" bg="papayawhip">
				{user}
			</GridItem>
		);
	}

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
			{[...Array(9)].map((item, i) => (
				<BoardItem key={i} index={i} />
			))}
		</Grid>
	);
}
