import React, { Component } from 'react';
import Intro from './intro/Intro';
import { NavLink } from 'react-router-dom';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <NavLink to={'/'}>
          <Intro />
        </NavLink>
        <h2>HELLO</h2>
        <p>
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default AboutMe;
