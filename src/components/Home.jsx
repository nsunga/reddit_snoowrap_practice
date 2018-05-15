import React, { Component } from 'react';
import { connecter } from '../reddit_calls/reddit.js';
import { Row, Col, Grid } from 'react-bootstrap';
import Card from './Card';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queried_list: [],
    };
  }

  componentWillMount() {
    let queried_list = [];
    const reddit = connecter();
    reddit.config({continueAfterRatelimitError: true});

    reddit
      .getSubreddit('streetwear')
      .getHot()
      .then( subreddit => {
        subreddit.forEach(submission => {
          queried_list.push({
            title: submission.title,
            url: `https://www.reddit.com${submission.permalink}`,
            upvotes: submission.ups,
            comments: submission.num_comments,
            thumbnail: submission.thumbnail,
            author: submission.author,
          });
        });

        this.setState({queried_list: queried_list});
      });
  }

  render() {
    console.log('list');
    console.log(this.state.queried_list);
    let cards = [];
    for (let i = 0; i < this.state.queried_list.length; i++) {
      // console.log(this.state.queried_list[i]);
      cards.push(<Card key={[i]} value={ this.state.queried_list[i] } />);
    }
    let rows_and_cols = [];
    for (let i = 0; i < cards.length; i += 4) {
      rows_and_cols.push(
        <Row key={[i]}>
          <Col md={3}>{cards[i]}</Col>
          <Col md={3}>{cards[i+1]}</Col>
          <Col md={3}>{cards[i+2]}</Col>
          <Col md={3}>{cards[i+3]}</Col>
        </Row>
      );
    }
    // console.log(`${rows_and_cols.length}`);
    console.log('done');
    return (
      <div>
        <div>meep</div>
        <Grid>
          {rows_and_cols}
        </Grid>
      </div>
    );
  }
};
