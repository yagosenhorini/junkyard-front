import { useState, useEffect } from 'react';
import junkApi from '../services/junkApi';

function useItemsApi() {

  const [useItems, setItems] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      setError(false);
      setLoading(true);

      try {
        const data = await junkApi();
        setItems(data);
      } catch (err) {
        setError(true);
        throw new Error('Failed to get data:', err);
      } finally {
        setLoading(false);
      }
    }());
  },[]);

  return { useItems, isError, isLoading };
}

export default useItemsApi;