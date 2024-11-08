import { useState } from 'react';
import Form from './components/Form';
import Card from './Card';

function App() {
  const [bookData, setBookData] = useState(null);

  const handleFormSubmit = (data) => {
    setBookData(data);
  };

  const handleNewSearch = () => {
    setBookData(null);
  };

  return (
    <div className="app-container">
      {!bookData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Card
          title={bookData.title}
          author={bookData.author}
          inStock={true}
          onNewSearch={handleNewSearch}
        />
      )}
    </div>
  );
}

export default App;
