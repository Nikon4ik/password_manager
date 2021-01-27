import React, { useState } from "react";


const styles = {
    form: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        border: '1px solid #808080',
        padding: '5px'
    }
}

function DashboardForm() {
    const [naming, setNaming] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [count, setCount] = useState(1)
    const keys = Object.keys(localStorage);


    for(let key of keys) {
        if (key.slice(1).match(count) !== null && key.slice(1).match(count).index === 5) {
            setCount(count + 1)
        }
    }
    
    function AddItem(event) {
        event.preventDefault()
        if (password !== '') {
            setCount(count + 1)
            for(let key of keys) {
                if ( key.match(/authorize_user/) !== null && key.match(/authorize_user/).index === 0 ) {
                    localStorage.setItem(key.replace('authorize_user', '')+"point"+count, JSON.stringify([naming, login, password]));
                    window.location.assign('#dashboard')
                    window.location.reload()
                }
            }
        }
        else {
            document.getElementsByName('addPass')[0].style.border = '1px solid red'
        }
    }
    function Select(){
        document.getElementsByClassName('addItems')[0].children[2].style.border = '1px solid  rgba(0, 0, 0, 0.3)'
    }
    return (
        <form style={styles.form} onSubmit={AddItem} className="addItems"> 
            <input type="text" name="addName" placeholder="Name" naming={naming} onChange={event => setNaming(event.target.value)} onSelect={Select} />
            <input type="text" name="addLogin" placeholder="Login" login={login} onChange={event => setLogin(event.target.value)} onSelect={Select} />
            <input type="password" name="addPass" placeholder="Password*" password={password} onChange={event => setPassword(event.target.value)} onSelect={Select} />
            <button className="big-button" style={{width: '60px', height: '30px'}} type="submit">Add</button>
        </form>
    )
}

export default DashboardForm