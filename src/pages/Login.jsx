import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { UserContext } from "../index";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"

import { login } from "../http/userAPI";

import styles from "./Auth.module.scss";

import logo from "../assets/logo.png";
import mail from "../assets/svg/mail.svg";
import lock from "../assets/svg/lock.svg";


const Login = observer(() => {
  const {user} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    
    if (emailPattern.test(email) && password.length > 3) {
      return setDisabled(false)
    }
    
    setDisabled(true)
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const data = await login(email, password)

      user.setIsAuth(true);
      user.setUser(data);
    } catch (err) {
      setError(err.response.data.message)
    }
  }
  
  return (
    <div className={'container' + ' ' + styles.container}>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <h1 className={styles.title}>Вход</h1>
      <form className={error ? styles.form + ' ' + styles.wrongForm : styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <img src={mail} aria-hidden="true" />
          <Input
            type="email"
            placeholder="E-mail"
            name="email" value={email}
            change={ (e) => {
              setEmail(e.target.value)
              setError('')
            }}
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <img src={lock} aria-hidden="true" />
          <Input
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            change={ (e) => {
              setPassword(e.target.value)
              setError('')
            }}
            className={styles.input}
          />
        </label>
        <span className={'text-md' + ' ' + styles.warning}>{error}</span>
        <Button type="submit" disabled={disabled}>Войти</Button>
      </form>
      <div className={styles.bottom}>
          <span className="text-md">Вы не зарегестрированы?</span>
          <Link to="/registration" className={'text-md' + ' ' + styles.link}>Регистрация</Link>
      </div>
    </div>
  )
})

export default Login
