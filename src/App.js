import React, { Component } from 'react';

class App extends Component {
  state = {
    // file: null,
    img: '',
  }

  onChange = (e) => {
    const file = e.target.files.item(0);
    const fr = new FileReader();
    fr.addEventListener('load', this.fileLoad);
    fr.readAsDataURL(file);
    // this.setState({
    //   file,
    // })
  }

  fileLoad = (e) => {
    this.setState({
      img: e.target.result,
    });
  }

  submit = () => {
    // json base64
    // axios.post('img', {img: this.state.img});

    // multipart
    // const form = new FormData();
    // form.append(this.state.file);
    // axios.post('img', {form});
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        { this.state.img && <img alt="upload-img" width="100%" src={this.state.img} /> }
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;