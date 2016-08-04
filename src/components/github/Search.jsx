import React, {Component} from 'react';

class Search extends Component {
  onSubmit(e) {
      e.preventDefault();
      let userName = this.refs.userName.value.trim();
      if(!userName) {
          alert('Please Enter a Valid UserName');
          return;
      }
      this.props.onFormSubmit(userName);
      this.refs.userName.value = '';
  }

  render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="quickLabelAlign">Search GitHub Users:</label>
                        <input type="text" ref="userName" placeholder="Type to begin searching &hellip;" className="form-control mainSearch" />
                    </div>
                </form>
            </div>
        )
  }
}

export default Search
