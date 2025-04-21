import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ErrorMessage} from '../shared/ui/error-message/error-message';

type ItemType = {
  id: number;
  name: string;
  description: string;
};

function SinglePage() {
  const { id } = useParams<{ id: string }>();

  const [item, setItem] = useState<ItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchItem = async () => {
    if (!id) {
      setError(new Error('Invalid item ID'));
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${process.env.API_URL}/items/${id}`);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`${String(response.status)} ${errorData || ''}`);
      }

      const data = await response.json();

      if (!data) {
        throw new Error('Item not found');
      }


      setItem(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch item'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  const handleRetry = () => {
    fetchItem();
  };

  if (isLoading) {
    return (
      <div>
        Loading.....
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        message={error.message}
        onRetry={handleRetry}
      />
    );
  }

  if (!item) {
    return (
      <ErrorMessage
        message="Item not found"
        onRetry={handleRetry}
      />
    );
  }

  return (
      <div className="detail">
        <Link to={'/'}>Go Back</Link>
        <h2>Item Details</h2>
        <p>ID: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
      </div>
  );
}

export default SinglePage;
