import React, { createContext, useState } from 'react';
import { Box } from '@chakra-ui/react';

import Board from './Board';

export const GameContext = createContext({
	user: '',
	setUser: () => {}
});

export default function Main() {
	const [user, setUser] = useState('X');
	const value = { user, setUser };
	return (
		<GameContext.Provider value={value}>
			<Box d="flex" flexDir="column" justifyContent="center" alignItems="center">
				<Board />
			</Box>
		</GameContext.Provider>
	);
}
