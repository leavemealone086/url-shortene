import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redirect from './Redirect';
import { QRCodeSVG } from 'qrcode.react';
import ParticlesBg from 'particles-bg';

function App() {
  const [slug, setSlug] = useState('');

  return (
    <div>
      <>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Input setSlug={setSlug} />} />
              <Route path="/:slug" element={<Redirect />} />
            </Routes>
          </Router>
          <p className='container'> QR code</p>

          <QRCodeSVG value={slug} size="256" />
          
        </div>

        <ParticlesBg type="cobweb" bg={true} />
      </>
    </div>
  );
}

export default App;
