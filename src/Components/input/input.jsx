import React from 'react'
import style from './input.module.css'
import { useState } from 'react';
import { Button } from '../Button/button'

const sendFormData = (formData, error) => {
	if(!error) {
		console.log(formData);

	}
};

export const Input = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordError, setPasswordError] = useState(null);


  const onPasswordInput = ({ target }) => {
	const newError = passwordRepeat && target.value !== passwordRepeat ? 'Пароли должны совпадать' : null;
	setPasswordError(newError);
	setPasswordRepeat(target.value);
  };

const onSubmit = (event) => {
  event.preventDefault();
  sendFormData({ password, passwordError });
};


  return (
    <form onSubmit={onSubmit}>
    <div className={style.App}>
    {passwordError && <div className={style.errorLabel}>{passwordError}</div>}
      <input name="email" type="email" value={email} placeholder='Email' onChange={({ target }) => setEmail(target.value)}></input>
      <input name="password" type="password" value={password} placeholder='Введите пароль' onChange={({ target }) => setPassword(target.value)}></input>
      <input name="passwordRepeat" type="password" value={passwordRepeat} placeholder='Подтвердите пароль' onChange={({ target }) => {
    setPasswordRepeat(target.value);
    onPasswordInput({ target });
  }}></input>


    <Button password={passwordError}/>
    </div>
    </form>
  )
}
