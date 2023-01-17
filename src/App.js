import React,{useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [qrcode, setQrCode] = useState('');
  const [btntext, setBtnText] = useState('Generate QR Code');

  const generateQrCode = () => {
    setBtnText('Generating...');
    setQrCode('');
    if(text.length > 0){
      setTimeout(()=>{ 
        setBtnText('Generate QR Code');
        setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`); 
      }, 500);
    }
    else{
      alert('please input text or url');
      setBtnText('Generate QR Code');
    }
  }


  return (
    <div className="App">
      <h2 className='heading'>QR Code Generator  <i className="bi bi-arrow-clockwise" title='Refresh App' onClick={()=> {setQrCode(''); setText('') } }></i></h2>
      <p>Paste a url or enter any text to create qr code</p>
      <div className="container">
        <input type="text" value={text} placeholder="Enter text or url.." onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="container">
        <button onClick={generateQrCode}>{btntext}</button>
      </div>

      {
        qrcode.length > 0 ?
        <div className="qr-code">
          <img src={qrcode} alt="Qr Code Img" />
        </div> : ''
      }
      
    </div>
  );
}

export default App;
