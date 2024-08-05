import React, { Fragment } from 'react'
import { styles } from './../object-style/style';
import { StyledButton } from './Button/Button';

const StyledComponent = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div style={styles.Container}>
                <h2 style={styles.Header}>6) STYLED COMPONENT</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <button>BUTTON-1</button> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <StyledButton>Styled Button</StyledButton>
            <StyledButton changeColor='tryIT'>Styled Button</StyledButton>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default StyledComponent