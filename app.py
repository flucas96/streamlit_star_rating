import streamlit as st

from streamlit_star_rating import st_star_rating


amount_of_stars = st.sidebar.slider("Range slider", 5, 100,1)



v = st_star_rating("Vergib Sterne!",amount_of_stars,1,key="rating1",size=100, emoticons=False,read_only=False,dark_theme=True)

st.write(f"{v} Sterne selektiert!")