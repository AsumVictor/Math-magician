import React from 'react';
import Quotes from '../components/Quotes';

function QuotesPage() {
  return (
    <div className="w-full flex items-center py-10 flex-col px-3 md:px-10">
      <h1 className="text-xl font-bold mb-10 text-center">Read Quoates from famous magicians</h1>
      <Quotes />
    </div>
  );
}

export default QuotesPage;
