import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { StarRating,
EmoticonRating } from "baseui/rating";
import { ThemeProvider, LightTheme, DarkTheme} from "baseui"


const RatingComponent = (props: ComponentProps) => {

    const {label, maxValue, defaultValue,size,emoticons, read_only,dark_theme} = props.args;

    const [value, setValue] = useState(defaultValue);

    if(dark_theme) {
      var theme = DarkTheme
    }
    else {
      theme = LightTheme
    }

    useEffect(() => Streamlit.setFrameHeight());

    if(emoticons) {
      return (
        <>
        <h3>{label}</h3>
        <ThemeProvider theme={theme}>
        <EmoticonRating
          onChange={({value}) => {setValue(value); Streamlit.setComponentValue(value);}}
          size={size}
          value={value}
          readOnly = {read_only}
        />
        </ThemeProvider>
        </>
      );
    }
   else {
    return (
        <>
        <h3>{label}</h3>
        <ThemeProvider theme={theme}>
        <StarRating
          numItems={maxValue}
          onChange={({value}) => {setValue(value); Streamlit.setComponentValue(value);}}
          size={size}
          value={value}
          readOnly = {read_only}
        />
        </ThemeProvider>
        </>
      );
    }
}

export default withStreamlitConnection(RatingComponent);
