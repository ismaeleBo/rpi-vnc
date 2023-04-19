import './App.css';
import { VncScreen } from 'react-vnc';
import { useCallback, useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [isConnectionModalVisible, setConnectionModalVisible] = useState(false);
  const [showVnc, setShowVnc] = useState(false);
  const [error, setError] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const vncUrl = process.env.REACT_APP_VNC_URL;

  const handleConnect = useCallback(() => {
    setError('');
    if (!password) {
      setConnectionModalVisible(true);
      return;
    }
    setConnectionModalVisible(false);
    setShowVnc(true);
  }, [password, setShowVnc]);

  const handleDisconnect = useCallback(() => {
    setShowVnc(false);
    setIsConnected(false);
    setPassword('');
  }, [setPassword, setShowVnc]);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSecurityFailure = useCallback(() => {
    setError('Invalid credentials');
    setPassword('');
    setShowVnc(false);
  }, []);

  return (
    <div className='App'>
      <div className={isConnected ? 'header-transparent' : 'header'}>
        <div className='header-content'>
          <h3>Welcome to RPI VNC</h3>
          {!isConnected ? (
            <input
              className='connect-btn'
              type='button'
              onClick={handleConnect}
              value='Connect'
            />
          ) : (
            <input
              className='disconnect-btn'
              type='button'
              onClick={handleDisconnect}
              value='Disconnect'
            />
          )}
        </div>
      </div>
      {isConnectionModalVisible && (
        <div className='connection-modal'>
          <div>
            <p className='modal-title'>Inserisci la password</p>
            <input
              value={password}
              name='password'
              type='password'
              onChange={handleChange}
              className='password-input'
            />
          </div>

          <input
            className='connect-btn'
            type='button'
            onClick={handleConnect}
            value='Connect'
          />
        </div>
      )}
      {error && (
        <div className='error-modal'>
          <p className='error-message'>{error}</p>

          <input
            className='connect-btn'
            type='button'
            onClick={handleConnect}
            value='Retry'
          />
        </div>
      )}
      {showVnc && (
        <VncScreen
          url={vncUrl}
          scaleViewport
          background='transparent'
          rfbOptions={{
            credentials: { password },
          }}
          style={{ height: '75vh', width: '75vw' }}
          onConnect={() => setIsConnected(true)}
          onDisconnect={() => setIsConnected(false)}
          onSecurityFailure={handleSecurityFailure}
        />
      )}
    </div>
  );
}

export default App;
