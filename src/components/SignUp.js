import React, { useState } from "react";

const styles = {
    form: {
        margin: 'auto',
        width: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

export default function SignUp() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [count, setCount] = useState(1)
    const keys = Object.keys(localStorage);

    for(let key of keys) {
        if (key.match(/authorize_user/) !== null && key.match(/authorize_user/).index === 0) {
            window.location.assign('#dashboard')
            window.location.reload()
            return
        }
    }
    for(let key of keys) {
        if (key.match(count) !== null && key.match(count).index === 4) {
            setCount(count + 1)
        }
    }
    function submitForm(event) {
        if (login !== '' && password !== '') {
            event.preventDefault()
            setCount(count + 1)
            localStorage.setItem("user"+count, JSON.stringify([login, password]));
            window.location.assign('#login')
            window.location.reload()
        }
        else {
            event.preventDefault()
            setError('error')
        }
    }
    function Select(){
        setError('')
    }
    function LogIn() {
        window.location.assign('#login')
        window.location.reload()
    }
    
    return (
        <form style={styles.form} onSubmit={submitForm}>
            <input className={error} style={styles.input} type="text" name="login" placeholder="Login" login={login} onChange={event => setLogin(event.target.value)} onSelect={Select}/>
            <label htmlFor="sign-error" className={error}></label>
            <input style={styles.input} type="password" name="pass" placeholder="Password" password={password} onChange={event => setPassword(event.target.value)} onSelect={Select}/>
            <button className="big-button" style={styles.button} type="submit">Sign up</button>
            <button className="small-button" type="button" onClick={LogIn}>Log in</button>
        </form>
    )
}
