import {MagnifyingGlass, Trash} from '@phosphor-icons/react';
import {State} from '../../App';
interface ListProps {
	productName: State['items'];
}
const List = (props: ListProps) => {
	const {productName} = props;
	return (
		<>
			<div className="flex justify-between px">
				<span className="text-white text-md ">Nome do produto</span>
				<span className="text-white text-md mr-3  bg-opacity-90">Preço R$</span>
			</div>

			<ul className="w-full bg-white/80 rounded-lg gap-2">
				{productName.map((product) => (
					<>
						<li className="flex  p-2 gap-3">
							<div className=" flex flex-1 items-center gap-1">
								<Trash color="red" size={22} />
								<div className="flex bg-gray-400 w-full p-3 rounded-lg focus-within:outline-slate-300">
									<input
										type="text"
										className="bg-gray-400 text-white outline-none text-md"
										value={product.name}
									/>
								</div>
							</div>
							<div className=" flex justify-center items-center text-center w-full rounded-lg bg-gray-400">
								<input
									type="number"
									placeholder="Ex:19,90"
									className="w-full bg-gray-400 rounded-md outline-none border-0 text-center text-white font-semibold"
									value={product.id}
								/>
							</div>
						</li>
					</>
				))}
			</ul>
		</>
	);
};

export {List};
