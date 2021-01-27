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

function LogIn(index) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const keys = Object.keys(localStorage);

    for(let key of keys) {
        if (key.match(/authorize_user/) !== null && key.match(/authorize_user/).index === 0) {
            window.location.assign('#dashboard')
            window.location.reload()
            return
        }
    }
    function submitForm(event) {
        if (localStorage.length > 0) {       
            for(let key of keys) {
                if (key.match(/user/) !== null && key.match(/user/).index === 0) {
                    let user = JSON.parse(localStorage.getItem(key))
                    if ( key.match(/user/) !== null && key.match(/user/).index === 0 ) {
                        if (login === user[0] && password === user[1]) {
                            event.preventDefault()
                            setError('')
                            localStorage.setItem('authorize_'+key, 'true')
                            window.location.assign('#dashboard')
                            window.location.reload()
                            return
                        }
                        else {
                            event.preventDefault()
                            setError('error')
                            event.target.children[2].value = ''
                        }
                    }                    
                }
            }
        }
        else {
            event.preventDefault()
            setError('error')
            event.target.children[2].value = ''
        }
    }

    function Select(){
        setError('')
    }
    function SignUp() {
        window.location.assign('#signup')
        window.location.reload()
    }
    return (
        <form style={styles.form} onSubmit={submitForm} className="login">
            <input style={styles.input} className={error} type="text" name="login" placeholder="Login" login={login} onChange={event => setLogin(event.target.value)} onSelect={Select} />
            <label htmlFor="error" className={error} key={index}></label>
            <input style={styles.input} type="password" name="pass" placeholder="Password" password={password} onChange={event => setPassword(event.target.value)} onSelect={Select} />
            <button className="big-button" style={styles.button} type="submit">Log in</button>
            <button className="small-button" type="button" onClick={SignUp}>Sign up</button>
        </form>

    )
}


export default LogIn