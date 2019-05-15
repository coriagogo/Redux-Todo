import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete } from '../actions';


class TodoList extends React.Component {
    state = {
      newTodo: ''
    };
  
    updateNewTodo = e => {
      this.setState({
        newTodo: e.target.value
      });
    }
  
    addTodo = e => {        
      e.preventDefault();
      this.props.addTodo(
        this.state.newTodo
      );
      this.setState({ newTodo: ''});
    }  
  
    toggleComplete = id => {
      this.props.toggleComplete(id);      
    };
  
    // deleteComplete = complete => {
    //   this.props.deleteComplete(complete);
    // }
  
    render() {
      return (
        <React.Fragment>
          <div className="todo-list">
            {this.props.todos &&
              this.props.todos.map(todo => (
                <h4 onClick={() => this.toggleComplete(todo.id)} key={todo.id}>
                  {todo.text}
                  {todo.complete && <i className="fas fa-check" />}
                </h4>
              ))}
  
            <form onSubmit={this.addTodo}>
              <input  
                type="text"
                onChange={this.updateNewTodo}
                placeholder="new todo"
                value={this.state.newTodo}
              />
            </form>           
            {/* <button className="clear-btn" onClick={this.deleteCompleted}>Clear Completed</button> */}
          </div>
        </React.Fragment>
      );
    }
  }
  
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { addTodo, toggleComplete }
)(TodoList);




