import streamlit.components.v1 as components
import os
import warnings 

_RELEASE = False


if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("my_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "st_star_rating",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3000",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("st_star_rating", path=build_dir)


def st_star_rating(label: str, maxValue: int, defaultValue: int, size: int = 40, emoticons: bool = False, read_only: bool = False, dark_theme: bool = False, key = None,
                   resetButton: bool = False,resetLabel:str = "Reset Rating",customCSS:str="") -> int:
    
    """
    Component to display a star rating widget.


    Parameters
    ----------
    label : str
        A short label explaining to the user what this rating is for.
    maxValue : int
        The maximum value of the rating.
    defaultValue : int
        The default value of the rating.
    size : int, optional
        The size of the rating widget. The default is 40.
    emoticons : bool, optional
        Whether to use emoticons instead of stars. The default is False.
    read_only : bool, optional
        Whether the rating is read only. The default is False.
    dark_theme : bool, optional
        Whether to use a dark theme. The default is False.
    key : str, optional
        An optional string to use as the unique key for the widget. If this is omitted, a key will be generated for the widget based on its content. The default is None.
    resetButton : bool, optional
        Whether to display a reset button. The default is False.
    resetLabel : str, optional
        The label to use for the reset button. The default is "Reset Rating". HTML Styling is allowed
    customCSS : str, optional
        Custom CSS to apply to the component. The default is "".

    """

    if emoticons:
        if maxValue > 5:
            maxValue = 5
            warnings.log("Max value cannot is always 5 when using emoticons. Setting max value to 5")

    component_value = _component_func(label=label,maxValue=maxValue,defaultValue=defaultValue, emoticons = emoticons, read_only=read_only, dark_theme = dark_theme,
    size=size,key=key,default=defaultValue,resetButton=resetButton,resetLabel=resetLabel, customCSS=customCSS,)

    return component_value



