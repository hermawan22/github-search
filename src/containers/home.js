import React, { Component } from 'react';
import {
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/search';
import ListUser from '../components/listUser';

let timeoutId;

class Home extends Component {
  constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => this.props.fetchSearch(this.input.value), 1000);
  }

  render() {
    const {search, fetching} = this.props;

    console.log(search.items, 'ini adalah search');

    return (
      <div>
        <FormControl type="text" 
        placeholder="Enter Github User Name" 
        onChange={this.handleChange} 
        inputRef={ref => { this.input = ref; }} />

        {fetching && <div className="loading"> Loading.. </div>}
        
        <ListUser search={search} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search.all,
    fetching: state.search.fetching
  };
}

export default connect(mapStateToProps, {fetchSearch})(Home);
