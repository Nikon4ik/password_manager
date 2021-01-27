import React from "react";


const styles = {
    div: {
        height: '40px',
        border: '1px solid #808080',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px'
    },
    input: {
        display: 'none'
    }
}
function DashboardList(props) {
    var items = []
    var elements = []
    let keys = Object.keys(localStorage)
    for(let key of keys) {
        if ( key.match(/authorize_user/) !== null && key.match(/authorize_user/).index === 0 ) {
            var user = key.replace('authorize_user', '')
        }
        elements.push([key, JSON.parse(localStorage.getItem(key))])
    }
    for(let key of keys) {
        let userPoints = RegExp(user+'point')
        if ( key.match(userPoints) !== null && key.match(userPoints).index === 0 ) {
            items.push(JSON.parse(localStorage.getItem(key)))
        }
    }
    function EditItem(event) {
        let target = event.target
        let parent = target.parentNode
        let sibling = target.previousSibling.previousSibling.previousSibling
        target.style.display = 'none'
        target.previousSibling.style.display = 'initial'
        sibling.previousSibling.previousSibling.value = parent.firstChild.value
        sibling.previousSibling.value = parent.firstChild.nextSibling.value
        sibling.value = parent.firstChild.nextSibling.nextSibling.value
        Array.from(target.parentNode.querySelectorAll('input')).forEach(function(e){
            if ( e.className !== '' ) 
                e.style.display = 'none'
            else 
                e.style.display = 'initial'
        })
    }
    function SaveItem(event) {
        var oldItem = []
        var newItem = []
        let target = event.target
        target.style.display = 'none'
        target.nextSibling.style.display = 'initial'
        Array.from(target.parentNode.querySelectorAll('input')).forEach(function(e){
            if ( e.className !== '' ){ 
                e.style.display = 'flex'
                oldItem.push(e.value)
            }
            else {
                e.style.display = 'none'
                newItem.push(e.value)
            }
        })
        elements.forEach(function(ev) {
            if ( oldItem[0] === ev[1][0] && oldItem[1] === ev[1][1] && oldItem[2] === ev[1][2] ) {
                localStorage.setItem(ev[0], JSON.stringify(newItem))
            }
        })
        window.location.assign('#dashboard')
        window.location.reload()
    }
    function ShowItem(event) {
        let type = event.target.parentNode.firstChild.nextSibling.nextSibling.type
        if( type === 'password' ) {
            event.target.style.textDecoration = 'line-through'
            event.target.parentNode.firstChild.nextSibling.nextSibling.type = 'text'
        }
        else {
            event.target.style.textDecoration = 'none'
            event.target.parentNode.firstChild.nextSibling.nextSibling.type = 'password'
        }
    }
    return items.map(function(e, index) {
        function DeleteItem(event) {
            if ( event.target.parentNode.firstChild.nextSibling.nextSibling.value === e[2] && 
                event.target.parentNode.firstChild.value === e[0] &&
                event.target.parentNode.firstChild.nextSibling.value === e[1]) {
                elements.forEach(function(ev) {
                    if ( e[2] === ev[1][2]) {
                        localStorage.removeItem(ev[0])
                    }
                }) 
            }
            window.location.assign('#dashboard')
            window.location.reload()
        }
        return (
            <div style={styles.div} key={index}>
                <input className="input" type="text" disabled value={e[0]}/>
                <input className="input" type="text" disabled value={e[1]}/>
                <input className="input" type="password" disabled value={e[2]}/>
                <input style={styles.input} type="text" name="Name" placeholder="Name" />
                <input style={styles.input} type="text" name="Login" placeholder="Login" />
                <input style={styles.input} type="text" name="Pass" placeholder="Password" />
                <button className="show-button" onClick={ShowItem}>&#128065;</button>
                <button className="save-button" onClick={SaveItem}>&#10004;</button>
                <button className="edit-button" onClick={EditItem}>&#9998;</button>
                <button onClick={DeleteItem}>&times;</button>
            </div>
        )
    })

    
}

export default DashboardList