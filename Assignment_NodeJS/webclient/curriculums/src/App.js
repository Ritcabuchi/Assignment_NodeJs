import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    getcurriculum,
    createcurriculum,
    deletecurriculum
  } from './actions';


class App extends Component {

  state = {
    name: ''
  }

  componentDidMount()
  {
    this.props.getcurriculum();
  }

  statechanges = (e) =>
  {
    var {value} = e.target;
    this.setState({name:value})
  }
  statedelete = (e) =>
  {
    e.preventDefault();
    var {id} = e.target;
    this.props.deletecurriculum(id);
  }
  statesubmit = (e) =>
  {
    e.preventDefault();
    this.props.createcurriculum(this.state);
    this.setState({name:''});
  }



  render() {
    let {curriculums} = this.props;
    return (
      <div>
        <h1>College of Computing</h1>
        {<table>
          {
              curriculums.map((curriculum,index)=>{
                return(
                  <tr>
                    <td>{curriculum.id}. </td>
                    <td>{curriculum.name}</td>
                    <td><button id={curriculum.id} onClick={this.statedelete}>delete</button></td>
                  </tr>
                  );
              })
          }
        </table>}

        <h1>Add Curriculum</h1>
        <form onSubmit={this.statesubmit}>
          <input type='text' onChange={this.statechanges} value={this.state.name}/> <button type='submit'>Submit</button>
        </form>
      </div>
    );


  }
}

const mapStateToProps = ({curriculums})=>{
  return {curriculums}
}

export default connect(mapStateToProps,{getcurriculum,createcurriculum,deletecurriculum})(App);
