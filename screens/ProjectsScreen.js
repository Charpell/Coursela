import React, { Component } from "react";
import styled from "styled-components";


class ProjectsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Container>
        <Text>Projects Screen</Text>
      </Container>
    )
  }
}

export default ProjectsScreen;


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
`