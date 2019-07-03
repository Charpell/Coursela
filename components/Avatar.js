import React, { Component } from 'react'
// import { Text, View } from 'react-native'
import styled from 'styled-components';
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}


class Avatar extends Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?ext')
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response.photo
        });

        this.props.updateName(response.name)
      })
  }

  // fetch('https://uinames.com/api/?ext', {
  //     headers: new Headers({
  //       "X-API-KEY": ''
  //     })
  //   })

  render() {
    return (
      <Image source={{ uri: this.state.photo }} />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 10px;
`
