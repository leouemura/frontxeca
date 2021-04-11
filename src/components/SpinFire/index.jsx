import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import lottie from 'lottie-web'
import Lottie from 'react-lottie'
import animationData from './47630-fire.json'

/**
 * Component properties types
 */
Spin.propTypes = {
  spinning: PropTypes.bool,
  title: PropTypes.string,
  size: PropTypes.number
}

Spin.defaultProps = {
  spinning: false,
  title: 'Carregando...',
  size: 68
}



/**
 *  Create styles for use on the component
 */
const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  progress: {
    color: '#0b5faa',
    zIndex: 1
  }
}))

/**
 * Component to show a spinning bar above the component.
 *
 * @param {*} props
 */
function Spin(props) {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })
  const { spinning, title, size, children } = props;
  const classes = useStyles();
  const container = useRef(null)

  useEffect(() => { }, [spinning])

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={classes.wrapper}>
      <div disabled={spinning}>
        {children}
      </div>
      {spinning === true && (
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused} 
        />
      )}
    </div>
  )
}

export default Spin;
