import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Quote from './Quote';

function Quotes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quotes, setQuotes] = useState(null);
  let content;

  // show loading
  if (loading) {
    content = 'Loading quotes';
  }

  if (error) {
    content = 'Opps error occured fetch quotes! Try again ';
  }

  if (quotes) {
    content = (
      <>
        {quotes.map(({ quote, author }) => (
          <Quote key={nanoid()} quote={quote} author={author} />
        ))}
      </>
    );
  }

  useEffect(() => {
    const getQuotes = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=knowledge&limit=12',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': 'GD5MpIQ12ItTGCU9dxpvEg==zIB7Q8P5FEkpl5yh',
            },
          },
        );
        setLoading(false);
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    getQuotes();
  }, []);

  return (
    <div className="flex flex-col gap-5 overflow-y-auto h-full">
      {content}
    </div>
  );
}

export default Quotes;
