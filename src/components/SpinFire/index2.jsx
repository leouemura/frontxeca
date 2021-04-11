import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import lottie from 'lottie-web'

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
  const { spinning, title, size, children } = props;
  const classes = useStyles();
  const container = useRef(null)
  const container2 = useRef(null)
  const [spined, setSpined] = useState(false)

  const handleDelay = () => {
    setSpined(spinning)
  }
  const handleSpinEffects = () => {
  }
  useEffect(() => {
    // console.log("rodei")
    // console.log("spinning: ", spinning)
    // console.log("spined: ", spined)
    if (spinning === true) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./47630-fire.json'),
      })
      let time = setTimeout(()=>{handleDelay()},10)
      return () => clearTimeout(time)
    }
    if (spinning === false) {
      // let animate = lottie.loadAnimation({
      //   container: container.current,
      //   renderer: 'svg',
      //   loop: true,
      //   autoplay: false,
      //   speed: -0.5,
      //   animationData: require('./52716-fire.json'),
      // })
      

      // lottie.play(0,10)
      // console.log(false)
      let time = setTimeout(()=>{handleDelay()},2200)
      return () => clearTimeout(time)
    }
  }, [spinning])

  return (
    <div className={classes.wrapper}>
      <div disabled={ spinning }>
        {children}
      </div>
      {spinning === true && (
        <div className={classes.progress}>
          <div className="container" ref={container}></div>
        </div>
      )}
      {spinning === false && spined === true && (
        <div className={classes.progress}>
          <div className="container" ref={container}></div>
        </div>
      )}
    </div>
  )
}

export default Spin;
