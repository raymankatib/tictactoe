import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { GameContext } from './Main';

export default function Details() {
	const { user } = useContext(GameContext);
	return (
		<Box>
			<Text fontSize="4xl">{user} Turn!</Text>
		</Box>
	);
}
