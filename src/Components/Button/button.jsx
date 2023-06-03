import React from 'react'
import style from './button.module.css'
import { useState } from 'react';



export  function Button(error) {
  return (
    <button className={style.Button}  type="submit" disabled={!error}>Подтвердить</button>
  )
}
