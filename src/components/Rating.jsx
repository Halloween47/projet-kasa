import React from 'react';
import StarRating from 'react-rating-stars-component';

const NoteHost = ({ tableauDeNotes }) => {
    return (
      <div>
        {tableauDeNotes.map((note, index) => (
          <StarRating
            key={index}
            count={5}
            value={note}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        ))}
      </div>
    );
  };
  

export default NoteHost;
