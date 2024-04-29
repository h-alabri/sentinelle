// import { useState } from "react"
import { useCredentialsContext } from "../hooks/useCredentialsContext"
import { useAuthContext } from '../hooks/useAuthContext'

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CredentialForm = () => {

  //for password generator
  const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList = '0123456789';
const symbolsList = "!@#$%^&*()?";

const [password, setPassword] = useState('');
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [passwordLength, setPasswordLength] = useState(8);
    const [selectedChoices, setSelectedChoices] = useState(['lowercase', 'uppercase', 'numbers', 'symbols']);

    useEffect(() => {
        generatePassword();
    },[passwordLength]);

    const handleCheckbox = (type) => {
        let tempChoices = selectedChoices;
        if(tempChoices.includes(type)){
            const index = tempChoices.indexOf(type);
            tempChoices.splice(index,1);
        }
        else{
            tempChoices.push(type);
        }
        console.log(tempChoices);
        setSelectedChoices(tempChoices);
    }

    const generatePassword = () => {

        let characterList = '';

        if (lowerCase) {
            characterList += lowercaseList;
        }
        if (upperCase) {
            characterList += uppercaseList;
        }
        if (numbers) {
            characterList += numbersList;
        }
        if (symbols) {
            characterList += symbolsList;
        }

        let tempPassword = '';
        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength);
            tempPassword += characterList.charAt(characterIndex);
        }

        setPassword(tempPassword);
    }

    const copyPassword = async () => {
        const copiedText = await navigator.clipboard.readText();
        if (password.length && copiedText !== password) {
            navigator.clipboard.writeText(password);
            toast.success('Password copied to clipboard', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
  
  //for form
  const { dispatch } = useCredentialsContext()
  const { user } = useAuthContext()

  const [username, setUsername] = useState('')
  const [domain, setDomain] = useState('')
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const credential = {username, domain, pwd}

    const response = await fetch('/api/credentials', {
      method: 'POST',
      body: JSON.stringify(credential),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setUsername('')
      setDomain('')
      setPwd('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_CREDENTIAL', payload: json})
    }
  }
  console.log(emptyFields); // Add this to see what `emptyFields` contains before it's accessed

  return (
    <div className="around">
      <form  onSubmit={handleSubmit}>
        <h3>Create a New Credential</h3>

        <label>Username</label>
        <input 
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className={emptyFields.includes('username') ? 'error' : ''}
        />

        <label>Password</label>
        <input 
          type="text"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          className={emptyFields.includes('pwd') ? 'error' : ''}
        />

        <label>Domain</label>
        <input 
          type="text"
          onChange={(e) => setDomain(e.target.value)}
          value={domain}
          className={emptyFields.includes('domain') ? 'error' : ''}
        />

        <button>Add Credential</button>
        {error && <div className="error">{error}</div>}
      </form>

      <div className='pg-container'>
            <h3>Strong Password Generator</h3> 
            <div className="pg-password-wrapper"> 
                <div className="pg-password-area">
                    <div className="pg-password"> 
                        <input type="text" value={password} disabled placeholder='Click on the Generate Password' />
                    </div>
                </div>
            </div>
            <div className="pg-setting"> 
                <div className="pg-customize"> 
                    <div className="pg-checkboxes"> 
                        <div className="pg-left"> 
                            <div className="pg-checkbox-field"> 
                                <input type="checkbox" name="lower" id="lower" checked={lowerCase} disabled={selectedChoices.length === 1 && selectedChoices.includes("lowercase")} onChange={() => { setLowerCase(!lowerCase); handleCheckbox('lowercase');}} />
                                <label htmlFor="lower">Include LowerCase</label>
                            </div>
                            <div className="pg-checkbox-field"> 
                                <input type="checkbox" name="upper" id="upper" checked={upperCase} disabled={selectedChoices.length === 1 && selectedChoices.includes('uppercase')} onChange={() => { setUpperCase(!upperCase); handleCheckbox('uppercase');}} />
                                <label htmlFor="upper">Include UpperCase</label>
                            </div>
                        </div>
                        <div className="pg-right"> 
                            <div className="pg-checkbox-field"> 
                                <input type="checkbox" name="numbers" id="numbers" checked={numbers} disabled={selectedChoices.length === 1 && selectedChoices.includes('numbers')} onChange={() => { setNumbers(!numbers); handleCheckbox('numbers');}} />
                                <label htmlFor="numbers">Include Numbers</label>
                            </div>
                            <div className="pg-checkbox-field"> 
                                <input type="checkbox" name="symbols" id="symbols" checked={symbols} disabled={selectedChoices.length === 1 && selectedChoices.includes('symbols')} onChange={() => { setSymbols(!symbols); handleCheckbox('symbols');}} />
                                <label htmlFor="symbols">Include Symbols</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pg-password-length">
                <div className="pg-slider"> 
                    <p className="pg-rangeValue">{passwordLength}</p> 
                    <div className="pg-range"> 
                        <input type="range" min={8} max={40} defaultValue={passwordLength} onChange={(event) => setPasswordLength(event.currentTarget.value)} />
                    </div>
                </div>
            </div>
            <div className="pg-buttons"> 
                <button type='button' onClick={generatePassword}>Generate Password</button>&nbsp;&nbsp;&nbsp;
                <button type='button' onClick={copyPassword}>Copy Password</button>
                
            </div>
      </div>
    </div>
  )
}

export default CredentialForm