import React from 'react';
import HobbyItem from './HobbyItem'

const hobbies = [
  { id: 1, hobby: 'cantar'},
  { id: 2, hobby: 'comer' },
  { id: 3, hobby: 'escribir' }
]

const HobbyList = () => (
  <ul>
    {hobbies.map(hobby =>
      <HobbyItem key={hobbies.id}
        {...hobby}
      />
    )}
  </ul>
)

export default HobbyList;
