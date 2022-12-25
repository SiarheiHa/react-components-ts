import React, { Fragment } from 'react';
import Icon from './Icon';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => (
  <Fragment>
    <h2>
      <span>1. Base icon:</span>
    </h2>
    <Icon
      size={2}
      onClick={() => {
        console.log('!!!');
      }}
      faNames={['brands', 'opencart']}
    />

    {/* <i class="fa-brands fa-opencart"></i> */}
    {/* <i class="fa fa-brands fa-opencart func" style="font-size: 2rem;"></i> */}

    <h2>
      <span>2. Icons button group:</span>
    </h2>
    <ButtonGroup>
      <Button active>
        <Icon faNames='align-right' />
      </Button>
      <Button>
        <Icon faNames='align-center' />
      </Button>
      <Button>
        <Icon faNames='align-left' />
      </Button>
      <Button>
        <Icon faNames='align-justify' />
      </Button>
    </ButtonGroup>

    <h2>
      <span>3. Icon with size 8rem</span>
    </h2>
    <Icon title='badge' size={8} faNames='award' />

    <h2>
      <span>4. Disabling icon functionality:</span>
    </h2>
    <Icon
      size={2}
      disabled
      onClick={() => {
        console.log('!!!');
      }}
      faNames='atom'
    />
  </Fragment>
);

export default Sandbox;
