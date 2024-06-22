import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');

    const callApi = () => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error:', error));
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/text', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                alert('Text added successfully!');
                setText('');
            } else {
                const errorData = await response.json();
                alert(`Failed to add text: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding text');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Call Spring Boot API</h1>
                <button onClick={callApi}>Call API</button>
                <p>{message}</p>
                <h2>Add Text to MongoDB</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text here"
                    />
                    <button type="submit">Add Text</button>
                </form>
            </header>
        </div>
    );
}

export default App;
