const addFace = async () => {
    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Face added successfully:', data);
      return data.sid;
    } catch (error) {
      console.error('Error adding face:', error);
    }
  };

 export { addFace };