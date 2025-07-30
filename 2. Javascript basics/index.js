 // DOM Manipulation + Event Handling
    document.getElementById('changeTextBtn').addEventListener('click', () => {
      const title = document.getElementById('title');
      title.textContent = 'Title Changed by Browser JS!';
      logOutput('Title text changed!');
    });

    // Fetch API Example
    document.getElementById('fetchDataBtn').addEventListener('click', async () => {
      logOutput('Fetching data from JSONPlaceholder...');
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        logOutput('Data fetched:');
        logOutput(JSON.stringify(data, null, 2));
      } catch (error) {
        logOutput('Fetch error: ' + error);
      }
    });

    // LocalStorage Save Example
    document.getElementById('saveDataBtn').addEventListener('click', () => {
      const sampleData = { name: 'Alice', role: 'Developer', timestamp: Date.now() };
      localStorage.setItem('userData', JSON.stringify(sampleData));
      logOutput('Data saved to LocalStorage.');
    });

    // LocalStorage Load Example
    document.getElementById('loadDataBtn').addEventListener('click', () => {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        logOutput('Loaded from LocalStorage:');
        logOutput(storedData);
      } else {
        logOutput('No data found in LocalStorage.');
      }
    });

    // Helper function to show output
    function logOutput(message) {
      const outputDiv = document.getElementById('output');
      outputDiv.textContent += message + '\n';
      outputDiv.scrollTop = outputDiv.scrollHeight; // Auto scroll down
    }
