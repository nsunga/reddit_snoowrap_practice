import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail_value: false,
    };
  }

  componentWillMount() {
    if (this.props.value.thumbnail === 'self') {
      console.log('was true');
      this.setState({
        thumbnail_value: true,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.thumbnail_value ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.value.title}</h5>
            </div>
          </div>
        ) : (
          <div className="card">
            <img className="card-img-top" src={this.props.value.thumbnail} alt="thumbnail"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.value.title}</h5>
            </div>
          </div>
        )}
      </div>
    );
  }
};

// <div class="card" style="width: 18rem;">
// <img class="card-img-top" src="..." alt="Card image cap">
// <div class="card-body">
// <h5 class="card-title">Card title</h5>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
