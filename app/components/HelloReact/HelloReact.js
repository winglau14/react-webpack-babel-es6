import React, { Component } from 'react';

class HelloReact extends Component {
  handleClick(){
    alert('戳我干嘛！');
    alert('戳一下能怀孕吗？');
  }
  render(){

    return (
      <button className="my-button" onClick={this.handleClick.bind(this)}>
        快戳我
      </button>
    );
  }
}

export default HelloReact;