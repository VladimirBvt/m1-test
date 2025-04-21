import { useEffect, useState } from 'react';
import {IItem} from '../entities/item/model/types';

function useData() {
	const [items, setItems] = useState<IItem[]>([]);

	function fetchItems() {
		fetch(`${process.env.API_URL}/items`)
			.then(res => res.json())
			.then(data => setItems(data))
			.catch(err => {
				console.error('Failed to fetch items', err);
			})
	}

	useEffect(() => {
		fetchItems();
		const intervalId = setInterval(fetchItems, 10000);
    return () => {
      clearInterval(intervalId);
    }
	}, []);

	return items;
}

export default useData;
