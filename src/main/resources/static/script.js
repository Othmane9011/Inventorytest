document.getElementById('apiButton').addEventListener('click', function() {
    fetch('/api/hello')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error calling API';
        });
});

document.getElementById('byeButton').addEventListener('click', function() {
    fetch('/api/bye')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error calling API';
        });
});
