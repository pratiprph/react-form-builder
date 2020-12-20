import React from 'react'

 function Password() {
    return (
        <div className="form-group">
        <label for="exampleInputEmail1">password</label>
        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password"/>
        <small id="emailHelp" className="form-text text-muted">Enter Password</small>
        </div>
    )
}

export default Password;
