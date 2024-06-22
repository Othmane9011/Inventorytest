import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const callApi = () => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Call Spring Boot API</h1>
                <button onClick={callApi}>Call API</button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;