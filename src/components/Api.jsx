import { useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [newData, setNewData] = useState('');

  const handleCreate = async () => {
    try {
      const data = await axios.get('https://api.nasa.gov/planetary/apod?api_key=ghohFJNSJU9E8OGpMlL8bMCEaQloWjYIt7jXE9mt/count');
      alert(data);
      setNewData(data.data)
      console.log(data.data)
      // Optionally, fetch and update the displayed data
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <div>
      <p>{newData.explanation}</p>
      <img  style={{width:'1000px' , height:'1000px'}} src={newData.url} alt='' />
      <button style={{ position:'absolute', top:'0' ,left:'0'}} onClick={handleCreate}>Get</button>
    </div>
  );
};

export default Api;