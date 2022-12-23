/* eslint-disable */
import React, { Fragment } from 'react';
import Button from './Button';

const onClick = () => {
  console.log('click')
}
const Sandbox = () => (

  <Fragment>

    <h2><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2><span>2. Disabled button:</span></h2>
    <Button onClick={onClick} disabled />

    <h2><span>3. Active button:</span></h2>
    <Button active onClick={onClick} />

    <h2><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button" onClick={onClick}/>
    <Button type="submit" onClick={onClick}/>

    <h2><span>5. Button link</span></h2>
    <Button href="test" onClick={(e)=> {console.log(e); e.preventDefault(); {onClick}}}>Link</Button>
    <Button href="test" disabled onClick={onClick}>Link</Button>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
