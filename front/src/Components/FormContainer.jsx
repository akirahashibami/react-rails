import React from 'react';
import {
  FormGroup,
  Button,
  TextField } from '@material-ui/core';

import './FormContainer.css';

class FormContainer extends React.Component {

  state = {
    product: ''
  }

  onChangetext(e) {
    this.setState({product: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createProduct(this.state.product)
    this.setState({product:''})
  }

  render() {
    return(
      <div>
        <form>
          <FormGroup className="fromAddProduct">
            <TextField
              type="text"
              placeholder="Enter text"
              value={this.state.product}
              onChange={ e => this.onChangetext(e)}
            />
          </FormGroup>
        </form>
        <Button
          type="submit"
          onClick={this.hundleSubmit}
          variant="contained"
          color="primary"
        >投稿
        </Button>
      </div>
    )
  }
}

export default FormContainer;
