import React, { Component, useState } from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {
  value: Number,
  defaultVal: Number,
  min: Number,
  max: Number,
  setValue: Function,
  title: String,
  description: String,
  step: Number,
  showValue: Number,
}

export const SimpleHorizontalSlider = (props) => {
  const { defaultVal, title, description, min, max, value, setValue, step, valueFormatter, showValue } = props;

  return (
    <div className='slider custom-labels'>
      <div className="slider-text">
        <div className="slider-title">{title}</div>
        <div className="default-text">{props.children}</div>
        <div className='slider-value'>{valueFormatter ? showValue ? valueFormatter ? valueFormatter(showValue) : showValue : valueFormatter(value) : value}</div>
      </div>
      <Slider
        className="var-slider"
        min={min}
        max={max}
        value={value}
        onChange={setValue}
        trackStyle={{
          backgroundColor: "rgb(144, 144, 144)",
        }}
        step={step}
        handleStyle={{
          border: "solid 1px #93a1ad"
        }}
        // onAfterChange={setValue}
        // onChangeComplete={setValue}
      />
    </div>
  )
  }