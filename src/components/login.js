import React from "react";

class Login extends React.Component{
    state={
        email:'',
        password:''
    }

    handleChange=(e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div>
                <div>
                    <h2>Login here</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label for="email">email:</label>
                        <input type="email" name="email" id="email" placeholder="email" required onChange={this.handleChange}/>
                        <br />
                        <br /> 
                        <label for="password">password:</label>
                        <input type="password" name="password" id="password" placeholder="password" required onChange={this.handleChange}/>
                        <br />
                        <br />
                        <button onSubmit={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;