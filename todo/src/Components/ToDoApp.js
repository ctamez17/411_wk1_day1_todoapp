import React, { Component } from 'react';

class ToDoApp extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isClicked: false,
            todos: [],
            text: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.textUpdate = this.textUpdate.bind(this); //fixes crash on input change
    };

    handleClick() { //name handleClick or todosClick?
        this.setState({
            isClicked: !this.state.isClicked,
            text: '',
            todos: [...this.state.todos, this.state.text]
        })
        // console.log(this.state.isClicked)
    };

    textUpdate(e){
        this.setState({text: e.target.value})
    };

    clearText = (e) => {
        const clear = this.state.todos.splice(e, 1) 
        this.setState({clear})
    }

    render() {
        return(
            <div>
                <input value={this.state.text} onChange={this.textUpdate}></input>
                
                {/* Button toggles 'this.state.isClicked' boolean */}
                <button onClick={this.handleClick}>Add Item</button>

                <ul>
                    {/* ??? */}
                    {this.state.todos.map((newTodo, index) => {
                        return <li key={index}>{this.state.todos[index]}         <button onClick={this.clearText.bind(this, index)}>Remove</button></li>
                    })}
                </ul>
            </div>
        )
    }
};

export default ToDoApp;