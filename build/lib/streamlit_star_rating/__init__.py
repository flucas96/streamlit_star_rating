import streamlit.components.v1 as components
import os

_RELEASE = True


if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("my_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "st_star_rating",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("st_star_rating", path=build_dir)


def st_star_rating(label: str, maxValue: int, defaultValue: int, size: int = 40, emoticons: bool = False, read_only: bool = False, dark_theme: bool = False, key = None) -> int:

    component_value = _component_func(label=label,maxValue=maxValue,defaultValue=defaultValue, emoticons = emoticons, read_only=read_only, dark_theme = dark_theme,
    size=size,key=key,default=defaultValue)

    return component_value



