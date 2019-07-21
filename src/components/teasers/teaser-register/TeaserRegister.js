import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../../micro-components/button/Button'
import './teaser-register.scss'

function TeaserRegister() {
  return (
    <div className="teaser-register">
      <h3>Do you want to register? <Link to="/register" title="register"><Button>Register</Button></Link></h3>
    </div>
  );
}

export default TeaserRegister;
