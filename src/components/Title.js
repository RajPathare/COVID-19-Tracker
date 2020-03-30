import React from 'react';


const Title = () => {
    return(
        <div className="container">
        <div className="jumbotron"  style={{height:"170px", color:"white", backgroundColor:"#595959"}}><h2 style={{display: 'flex', justifyContent: 'center'}}>COVID-19 Info and Tracking</h2>
        <h6 style={{ textAlign:"right"}}>Created by - Raj Pathare</h6>
        <h6 style={{ textAlign:"right", fontSize:"13px"}}><a style={{ color:"white"}} href="https://docs.google.com/forms/d/e/1FAIpQLSdwLpcvf9QtYZl6IBpjTqB46Kay5XjN-f36nPXjiZHOX9s2GA/viewform?usp=sf_link" target="_blank">Click here for any suggestions/feedback</a></h6>
        </div>
        </div>
    )
}

export default Title;