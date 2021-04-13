import React, { useEffect, useState } from 'react';
import Spin from '../SpinFire';
import './styles.css';


function Actions() {
  const [loading, setLoading] = React.useState(false)

  const [inputTopic, setInputTopic] = useState('TATU DO BEM')
  const [inputHour, setInputHour] = useState('04')
  const [inputMinute, setInputMinute] = useState('20')
  const [inputSlider, setInputSlider] = useState(0)
  const [sliderState, setSliderState] = useState(false)


  // const handleClick = () => {
  //   setLoading(true)
  //   setLoading(false)
  // }

  const handleInputTopicChange = (event) => {
    if (event.target.value.length < 12) {
      setInputTopic(event.target.value.toUpperCase())
    }
  }

  const handleInputHourChange = (event) => {
    if (event.target.value >= 0 || event.target.value <= 24) {
      setInputHour(event.target.value)
    }
    // setInputHour(event.target.value)

  }

  const handleInputMinuteChange = (event) => {
    if (event.target.value >= 0 || event.target.value <= 60) {
      setInputMinute(event.target.value)
    }
  }

  const handleSliderChange = (event) => {
    setLoading(true)
    if (sliderState === false) {
      const slider_value = event.target.value
      // console.log(event.target) 
      setInputSlider(slider_value)


      //pass the background color to the slider component
      const sliderInput = event.target
      let color = "linear-gradient(90deg,  #20202100 " + slider_value + "%, #27282900 100%)"
      sliderInput.style.background = color

      //change the action-container width based on 0~100
      // const actionContainer = document.getElementById("action-containerId")
      const actionContainer = event.target.parentElement.parentElement.firstChild
      let width = 33 - slider_value / 4 + "rem"
      actionContainer.style.width = width

      //change the lottie fire animation marginLeft
      // let marginLeft = "calc(325px - "+4*slider_value+"px)"
      const fireLottie = event.target.parentElement.parentElement.firstChild.lastChild
      let marginLeft = "calc(325px - " + 4 * slider_value + "px)"
      fireLottie.style.marginLeft = marginLeft
    }
    if (sliderState === true) {
      const slider_value = event.target.value
      if (slider_value == 100) {
        console.log('travar aqui')
        setInputSlider(slider_value)
        //pass the background color to the slider component
        const sliderInput = event.target
        let color = "linear-gradient(90deg,  #20202100 " + slider_value + "%, #27282900 100%)"
        sliderInput.style.background = color

        //change the action-container width based on 0~100
        // const actionContainer = document.getElementById("action-containerId")
        const actionContainer = event.target.parentElement.parentElement.firstChild
        let width = 33 - slider_value / 4 + "rem"
        actionContainer.style.width = width

        //change the lottie fire animation marginLeft
        // let marginLeft = "calc(325px - "+4*slider_value+"px)"
        const fireLottie = event.target.parentElement.parentElement.firstChild.lastChild
        let marginLeft = "calc(325px - " + 4 * slider_value + "px)"
        fireLottie.style.marginLeft = marginLeft
      }
    }
    setSliderState(false)

  }

  const handleResetSlider = (event) => {

    setSliderState(true)
    const slider_value = 0
    // console.log(event.target) 
    setInputSlider(slider_value)

    //pass the background color to the slider component
    const sliderInput = event.target
    let color = "linear-gradient(90deg,  #20202100 " + slider_value + "%, #27282900 100%)"
    sliderInput.style.background = color

    //change the action-container width based on 0~100
    // const actionContainer = document.getElementById("action-containerId")
    const actionContainer = event.target.parentElement.parentElement.firstChild
    let width = 33 - slider_value / 4 + "rem"
    actionContainer.style.width = width

    //change the lottie fire animation marginLeft
    // let marginLeft = "calc(325px - "+4*slider_value+"px)"
    const fireLottie = event.target.parentElement.parentElement.firstChild.lastChild
    let marginLeft = "calc(325px - " + 4 * slider_value + "px)"
    fireLottie.style.marginLeft = marginLeft
  }

  useEffect(() => {
    console.log('inputSlider: ', inputSlider)
  }, [inputSlider])

  return (
    <div className="container">
      <div className="action-container"
        id="action-containerId"
        onMouseEnter={() => setLoading(true)}
        onMouseLeave={() => setLoading(false)}>
        <div className="card-container1">
        </div>
        <div className="card-container2">
        </div>
        <div className="card-container3">
        </div>
        <div className="card-container4">
        </div>
        <div className="papelito">
          <div>
            <input type="text" name="input_topic" className="input_topic" value={inputTopic} onChange={(e) => handleInputTopicChange(e)} />
          </div>
          <div>
            <input type="number" className="input_hour" dir="rtl" min="0" max="24" value={inputHour} onChange={(e) => handleInputHourChange(e)} />:
            <input type="number" className="input_minute" min="0" max="59" value={inputMinute} onChange={(e) => handleInputMinuteChange(e)} />
            <div className="underline">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="fire" id="fireId">
          <Spin spinning={loading}></Spin>
        </div>
      </div>

      {/* <button className="btn_actions" onClick={() => handleClick()} style={{ marginBottom: 70 }}>Click</button> */}

      <div className="slider-container">
        <input type="range" min="0" max="100" name="sliderId" id="sliderId" className="slider" value={inputSlider}
          onChange={(e) => handleSliderChange(e)}
          // onMouseEnter={() => setLoading(true)}
          onMouseLeave={() => setLoading(false)}
          onMouseUp={(e) => handleResetSlider(e)}
        />
      </div>
    </div>
  )
}

export default Actions;