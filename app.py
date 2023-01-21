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


stars = st_star_rating(label, amount_of_stars, default_value, size, emoticons, read_only, dark_theme)
st.write(stars)



st.code("""
import streamlit  as st
from streamlit_star_rating import st_star_rating


stars = st_star_rating(label, amount_of_stars, default_value, size, emoticons, read_only, dark_theme)
st.write(stars)
""")
