import {useReducer, useState} from 'react';
import {MagnifyingGlass, Trash} from '@phosphor-icons/react';
import {List} from './components/Lista/List';

export interface State {
	items: {
		id: number;
		name: string;
	}[];
}

type Action =
	| {type: 'ADD_PRODUCT'; payload: {id: number; name: string}}
	| {type: 'REMOVE_PRODUCT'; payload: {id: string}};

const initialState: State = {items: []};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {items: [...state.items, action.payload]};
		case 'REMOVE_PRODUCT':
			return {
				items: state.items.filter((item) => item.name !== action.payload.id),
			};
		default:
			throw new Error();
	}
}

function App() {
	const [product, setProduct] = useState('');

	const [state, dispatch] = useReducer(reducer, initialState);

	const addProduct = (name: string) => {
		const id = state.items.length + 1;
		dispatch({type: 'ADD_PRODUCT', payload: {id, name}});
	};

	return (
		<>
			<div className="w-full flex h-screen justify-center bg-gray-800  overflow-scroll">
				<div className="w-96 flex flex-col bg-white/5 gap-4 p-4">
					<div className="w-full h-20 rounded-lg flex gap-2 items-center">
						<img
							src="../src/assets/logo.png"
							className="w-20 h-20 object-cover rounded-lg"
						/>
						<p className="text-white">Compras mais fáceis</p>
					</div>

					<div className="w-full flex items-center gap-2">
						<div className="flex flex-1 gap-2 items-center border border-gray-600 p-2 rounded-xl">
							<input
								type="text"
								className="bg-white/5 border-0 outline-0 w-full rounded-xl p-1 text-white"
								onChange={(e) => setProduct(e.target.value)}
							/>
						</div>
						<button
							className="bg-green-800 p-2 rounded-lg text-white text-xl"
							onClick={() => addProduct(product)}
						>
							+
						</button>
					</div>
					<List productName={state.items} />
				</div>
			</div>
		</>
	);
}

export default App;
