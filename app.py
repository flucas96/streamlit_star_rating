import streamlit  as st

from streamlit_star_rating import st_star_rating

st.set_page_config(layout="wide")


with st.sidebar:

    label = st.text_input("Label","How many stars?")
    amount_of_stars = st.slider("Amount of Stars",min_value=1,max_value=100,value=5,step=1)
    default_value = st.slider("Default Value",min_value=0,max_value=amount_of_stars,value=3,step=1)
    size = st.slider("Size",min_value=10,max_value=100,value=40,step=10)
    emoticons = st.checkbox("Emoticons",value=False)
    read_only = st.checkbox("Read Only",value=False)
    dark_theme = st.checkbox("Dark Theme",value=False)

    st.divider()
    st.caption("Update - 2023-06-23")
    reset_btn = st.checkbox("Reset Button",value=False)
    if reset_btn:
        reset_label = st.text_input("Reset Label","<b>Reset Rating</b>")
        st.caption("HTML Styling is allowed")
    else:
        reset_label = "Reset Rating"

    enable_css = st.checkbox("Enable Custom CSS",value=False)

    custom_css = st.text_area("Custom CSS","""[data-baseweb="button"] {
    /* Your CSS styles go here. For example: */
    color: red;
    background-color: black;
}""", disabled=not enable_css)
    
    if enable_css:
        css_custom = custom_css
    else:
        css_custom = "" 

    st.divider()
    st.caption("Update - 2023-10-16")
    st.write("Added the posibility to add an 'on_click' function. The first parameter of the function is the return value of the component. Additional parameters can be passed using the 'on_click_kwargs' parameter.")


def function_to_run_on_click(value):
    st.write(f"**{value}** stars!")
with st.echo(): 
    stars = st_star_rating(label, amount_of_stars, default_value, size, emoticons, read_only, dark_theme, resetButton=reset_btn, resetLabel=reset_label,
                           customCSS=css_custom, on_click=function_to_run_on_click)
    st.write(stars)



