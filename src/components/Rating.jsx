// or a global .css file

import { useState } from "react";
import Star from './Star';
import Button from "./Button";
import Modal from "./Modal";

//const Rating = ({heading = "how do you feel about your experience", color,
//    feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']}) => {
//const Rating = ({heading}) => {  could destructure, and use as "heading" instead of props.heading
const Rating = ({heading, color}) => {



  // this is inline style, with a double bracket, and a JS object, but it's
  // JS textAlign, not text-align
  /*
  return ( 
    <div style={{
        textAlign: 'center', 
        fontFamily: 'Arial',
        padding: '20px',
    }}>
      <h2>Rate Your Experience</h2>
    </div>
  );
  */

  /*
  // use a style object
  return ( 
    <div style={styles.container}>
      <h2 style={styles.heading}>Rate Your Experience</h2>
    </div>
  );
  */
  // use a CSS file

  /*
  {} - JS expression
  array with a map function, 
  then parens, cuz you're rendering
  want to show an actual star, use unicode chars
  don't forget the key for the list, else there' the warning
  */
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const stars = Array.from( {length: 5}, (_, i) => i + 1)  // stars gotta match feedback msgs

  // these not in state
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

  const clicked = (star) => {
    //console.log(`Clicked! ${star}`)
    console.log(rating)
    setRating(star+1)
  }

//className={`star ${star <= (hover || rating) ? "active" : ""}`} 
//  this lights up to where i hover, unless i click, then it sticks at yellow to there.
// actually, is at one less than where i click, so a tiny logic error there.

//  {
//    rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>;
//  }
  
  const hovered = (direction, index) => {
    console.log('hovered', direction, index);
    setHover(index)
  }

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0); // Optional: Reset rating after submission
  };

  return ( 
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <h2>{heading}</h2>
      {/*{hover}*/}
      <div className='stars'>
      {/* [1,2,3,4,5].map( (star) => (
          <span key={star} className="star">{'\u2605'}</span>
      )) */}
      {/* gotta have the () => if passing a param, cuz with the parens, it's a function CALL and will FIRE IMMEDIATELY*/}
      {/*Rating: {rating}*/}
            {/*
            onMouseEnter={() => hovered('enter', index)}
            onMouseLeave={() => hovered('leave', index)}
            className="star">  with 'active' makes them all yellow
            */}
      { stars.map( (star, index) => (
        // new component, being passed a function as a prop, that when clicked, will run setRating
        <Star 
          key={star} 
          star={star}
          rating={rating}
          hover={hover}
          color={'gold'}
          ratingClick={setRating}
          hoverEnter={setHover}
          hoverLeave={() => setHover(null)}
        />

        /*
          <span 
            onClick={() => clicked(index)} 
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            key={star} 
            className={`star ${star <= (hover || rating) ? 'active' : ''}`}
            style={{color: star <= (hover || rating) ? color : '#ccc',}}
          >
                {'\u2605'}
          </span>
        */
      )) }
      {/* [1,2,3,4,5].map( (star, index) => (
          <span key={index} className="star">{'\u2605'} {index} </span>
      )) */}
      </div>
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

      {
        /* Submit Button */
      }
      {
        <button 
          className='submit-btn'
          onClick={handleSubmit} 
          disabled={rating === 0}
        >
          Submit
        </button>
      }
      <br/>
      {/* note this is a custom component, not an html button * /
        <Button
          className="submit-btn"
          onClick={handleSubmit} 
          disabled={rating === 0}
        >My Button</Button>
      */}

      {/* Modal only show if submitted is true */}
      {/*
                  <button className='close-btn' onClick={closeModal}>
              Close
            </button>

      */}
      {/*
      {submitted && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Thank You!</h2>
            <p>
              You rated us {rating} star{rating > 1 ? 's' : ''}!
            </p>
            <Button className='close-btn' onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      )} 
      */}     
      <Modal
        isOpen={submitted}
        onClose={closeModal}
        rating={rating}
       />
 
     </div>
  );
}

// or here:
const styles = {
    container: {
        textAlign: 'left', 
        fontFamily: 'Arial',
        padding: '20px',
    },
    heading: {color: 'red'},
}
export default Rating
