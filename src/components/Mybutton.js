import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Button } from 'reactstrap';

class Mybutton extends Component {

  render ()  {
return (
  <div>
        <BrowserRouter>
    <div>
    <Link to='https://...'>
    <Button color="danger">Click!</Button>
    </Link>
    </div>
    </BrowserRouter>
    </div>
  );


}}

export default Mybutton;