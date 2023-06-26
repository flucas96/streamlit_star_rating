Streamlit Star Rating Component
===

This streamlit component adds a star selector to Streamlit Apps. 

It implements the Baseui Rating implementation: https://baseweb.design/components/rating/

Installation
-----------

    $ pip install st-star-rating


Usage
------------

## Import the Component

    $ from streamlit_star_rating import st_star_rating

    $ stars = st_star_rating("Please rate you experience", maxValue=5, defaultValue=3, key="rating")

maxValue : Determines how many Stars will be shown
defaultValue: Amount of preselected Stars


## Choose between a dark and light theme

    $ stars = st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", dark_theme = True )

## Read-Only Mode

    Users can not change the amout of selected stars

    st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", read_only = True )


## Emojis instead of Stars
Note: The maximum value is limited to 5 when using emojis instead of stars.

    st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", emoticons = True )


## Update 2023-06


It is possible to add a reset button to the component. The reset button will reset the rating to the default value.

    st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", reset_button = True )

Furthermore, the label of the button can be determined by setting the resetLabel parameter. Note: HTML tags will be interpreted.

    st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", reset_button = True, resetLabel = "Reset" )

Additionally it is possible to provide custom CSS to the component. The CSS can be provided as string and will be rendered in `<style>` tags.

    st_star_rating(label = "Please rate you experience", maxValue = 5, defaultValue = 3, key = "rating", reset_button = True, resetLabel = "Reset", customCSS = "div {background-color: red;}" )

