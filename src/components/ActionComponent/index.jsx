import React from 'react';
import Spin from '../SpinFire';
import './styles.css';


function Actions() {
  const [loading, setLoading] = React.useState(false)
  const [loading2, setLoading2] = React.useState(false)

  const handleClick = () => {
    setLoading(true)
    setLoading(false)
  }

  const handleSliderChange = (event) =>{
    
    const slider_value = event.target.value
    // const sliderInputComponent = event.target
    console.log(event.target) 
    
    //pass the background color to the slider component
    // let color =  "linear-gradient(90deg,  #202021 "+ slider_value +"%, #33333d 100%)"
    const sliderInput = event.target
    let color =  "linear-gradient(90deg,  #202021 "+ slider_value +"%, #272829 100%)"
    sliderInput.style.background = color
    
    //change the action-container width based on 0~100
    // const actionContainer = document.getElementById("action-containerId")
    const actionContainer = event.target.parentElement.parentElement.firstChild
    let width = 33 - slider_value/4+"rem"
    actionContainer.style.width = width
    
    //change the lottie fire animation marginLeft
    // let marginLeft = "calc(325px - "+4*slider_value+"px)"
    const fireLottie = event.target.parentElement.parentElement.firstChild.lastChild
    let marginLeft = "calc(325px - "+4*slider_value+"px)"
    fireLottie.style.marginLeft = marginLeft

  }
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
            <input type="text" name="input_topic" className="input_topic" value={"PAPELITO"} />
          </div>
          <div>
            <input type="number" className="input_hour" value="04" />:
            <input type="number" className="input_minute" value="21" />
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

      {/* <div className="action-container"
        onMouseEnter={() => setLoading2(true)}
        onMouseLeave={() => setLoading2(false)}>
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
            <input type="text" name="input_topic" className="input_topic" value={"PAPELITO"} />
          </div>
          <div>
            <input type="number" className="input_hour" value="04" />:
            <input type="number" className="input_minute" value="21" />
            <div className="underline">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="fire">
          <Spin spinning={loading2} />
        </div>
      </div>
      <button className="btn_actions" onClick={() => handleClick()} style={{ marginBottom: 70 }}>Click</button> */}

      <div className="slider-container">
        <input type="range" min="0" max="100" name="sliderId" id="sliderId" className="slider" 
        onChange={(e)=>handleSliderChange(e)}
        onMouseEnter={() => setLoading(true)}
        onMouseLeave={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default Actions;