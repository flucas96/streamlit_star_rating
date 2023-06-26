import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { StarRating, EmoticonRating } from "baseui/rating";
import { ThemeProvider, LightTheme, DarkTheme } from "baseui";
import { Button } from 'baseui/button';

const RatingComponent = (props: ComponentProps) => {
    const {label, maxValue, defaultValue, size, emoticons, read_only, dark_theme, resetLabel, resetButton,customCSS} = props.args;

    const [value, setValue] = useState(defaultValue);

    const theme = dark_theme ? DarkTheme : LightTheme;

    useEffect(() => Streamlit.setFrameHeight());

    const resetRating = () => {
        setValue(0);
        Streamlit.setComponentValue(0);
    };

    return (
        <>
        <style dangerouslySetInnerHTML={{__html: customCSS}}></style>
        <h3>{label}</h3>
        <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "left" }}>
          {emoticons ? 
            <EmoticonRating
                onChange={({value}) => {setValue(value); Streamlit.setComponentValue(value);}}
                size={size}
                value={value}
                readOnly={read_only}
            /> 
            :
            <StarRating
                numItems={maxValue}
                onChange={({value}) => {setValue(value); Streamlit.setComponentValue(value);}}
                size={size}
                value={value}
                readOnly={read_only}
            />
          }
     {!read_only && resetButton && 
          <div>
            <Button onClick={resetRating} size="compact" kind="secondary">
              <span dangerouslySetInnerHTML={{ __html: resetLabel }} />
            </Button>
          </div>}
        </div>
        </ThemeProvider>
        </>
    );
}


export default withStreamlitConnection(RatingComponent);
