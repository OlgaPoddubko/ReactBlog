import React from 'react';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
      auth: '',
      filt: '',
      filtQuery: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.handleFiltChange = this.handleFiltChange.bind(this);
    this.handleFiltQuerySubmit = this.handleFiltQuerySubmit.bind(this);

  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleAuthorChange(e) {
    this.setState({auth: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      author: this.state.auth,
    //  id: Date.now()
    };
    this.setState(prevState => ({items: prevState.items.concat(newItem), text: '', auth: ''}));
  }

  handleDelete(e) {
    console.log(e.target.id);
    e.stopPropagation();
    e.preventDefault();

    let currentItems = this.state.items;
    currentItems.splice(e.target.id, 1);
    this.setState({items: currentItems});

  }

  handleFiltChange(e) {
    this.setState({filt: e.target.value});
  }

  handleFiltQuerySubmit(e) {
    e.preventDefault();

    this.setState(prevState => ({filtQuery: prevState.filt}));
  }

  render() {
    return (
      <div className="container">

        <form onSubmit={this.handleFiltQuerySubmit} className="form-inline">
          <div className="form-group">
            <label htmlFor="findBy" className="sr-only">author</label>
            <input type="text" readOnly className="form-control-plaintext" id="findBy" value="find post by author"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" onChange={this.handleFiltChange} value={this.state.filt} placeholder="find by author"/>
          </div>
          <button type="submit" className="btn btn-primary">find</button>
        </form>

        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>author</th>
              <th>post</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.filter((item) => {
              if (!this.state.filtQuery)
                return true;
              let regexp = new RegExp(this.state.filtQuery, 'i');
              return item.author.match(regexp);
            }).map((post, index) => {
              return <tr key={index}>
                <td>{post.author}</td>
                <td>{post.text}</td>
                <td>
                  <span id={index} onClick={this.handleDelete}>delete</span>
                </td>
              </tr>
            })
}
          </tbody>
        </table>

        <div className="">
          <div className="form-area">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input value={this.state.auth} onChange={this.handleAuthorChange} className="form-control" type="text" placeholder="author" required/>
                <textarea value={this.state.text} onChange={this.handleTextChange} className="form-control" type="textarea" placeholder="text" maxLength="80" rows="3"></textarea>
                <button className="btn btn-primary pull-right">add post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
