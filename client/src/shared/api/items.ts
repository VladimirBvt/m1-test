import {IItem} from '../../entities/item/model/types';

export const getItems = async (): Promise<IItem[] | undefined> => {
  try {
    const response = await fetch(`${process.env.API_URL}/items`);

    return await response?.json();
  } catch (err) {
    console.error('Failed to fetch items', err);
    return;
  }
}
