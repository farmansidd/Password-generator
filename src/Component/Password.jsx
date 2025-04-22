import { useState, useCallback } from 'react';
import '../App.css';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialChars) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSpecialChars]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  return (
    <div className='password-generator'>
      <h1>Password Generator</h1>
      <div className='password-generator__container'>
        <div className='password-generator__input-section'>
        <input
            type="text"
            readOnly
            value={password}
            placeholder="Generated password will appear here"
            aria-label="Generated password"
          />
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
          <div className='password-generator__options'>
            <label>
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Include numbers
            </label>
            <label>
              <input
                type="checkbox"
                checked={includeSpecialChars}
                onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              />
              Include special characters
            </label>
          </div>
          <button className='generate-button' onClick={generatePassword}>Generate</button>
        </div>
        <div className='password-generator__output-section'>
          
          <button className='copy-button' onClick={copyToClipboard}>Copy Password</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
