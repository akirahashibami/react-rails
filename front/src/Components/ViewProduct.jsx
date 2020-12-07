import React from 'react';
import { Button } from '@material-ui/core';

class ViewProduct extends React.Component {

  state = {
    updateText: ''
  }

  handleDelete = () => {
    this.props.onDelete(this.props.data.id)
  }

  handleUpdate = () => {
    this.props.onUpdate(this.props.data.id, this.state.updateText)
  }

  handleInput = (e) => {
    this.setState({updateText: e.target.value})
  }

  render(){
    return(
      <div>
        <span>{this.props.data.product}</span>
        <span>
          <input
            type="text"
            value={this.state.updateText}
            onChange={e => this.handleInput(e)}
          />
        </span>
        <span>
          <Button
            type="submit"
            onClick={this.handleUpdate}
          >更新
          </Button>
        </span>
        <span className="deleteButton" onClick={this.handleDelete}>✖︎</span>
      </div>
    )
  }
}

export default ViewProduct;
