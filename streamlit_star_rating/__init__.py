import streamlit.components.v1 as components
from typing import Tuple

_component_func = components.declare_component(
    "star_rating",
    url="http://localhost:3001",
)

def st_star_rating(label: str, maxValue: int, defaultValue: int, size: int = 40, emoticons: bool = False, read_only: bool = False, dark_theme: bool = False, key = None) -> int:

    component_value = _component_func(label=label,maxValue=maxValue,defaultValue=defaultValue, emoticons = emoticons, read_only=read_only, dark_theme = dark_theme,
    size=size,key=key,default=defaultValue)

    return component_value


