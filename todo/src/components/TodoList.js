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
        console.log('addTodo activated');
        console.log(this.props);
      e.preventDefault();
      this.props.addTodo(
        this.state.newTodo
      );
      this.setState({ newTodo: ''});
    }  
  
    toggleComplete = id => {
      this.props.toggleComplete(id);
      console.log(this.props.toggleComplete(id));
    };
  
    // removeCompleted = () => {
    //   this.setState({
    //     newTodo: this.state.newTodo.filter(value => !value.complete)
    //   })
    // }
  
    render() {
      return (
        <React.Fragment>
          <div className="todo-list">
            {this.props.todos &&
              this.props.todos.map(todo => (
                <h4 onClick={() => this.toggleComplete(todo.id)}
                key={todo.id}>
                  {todo.text}
                  {todo.toggleComplete && <i class="fas fa-check" />}
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
            {/* <button className="clear-btn" onClick={this.removeCompleted}>Clear Completed</button> */}
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




