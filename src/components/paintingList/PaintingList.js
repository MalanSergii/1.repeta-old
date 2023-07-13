import users from '../../data/users.json';
import Painting from 'components/painting';

const PaintingList = () => {
  return (
    <ul>
      {users.map(({ name, age, hobby }) => (
        <li key={name}>
          <Painting name={name} age={age} hobby={hobby}></Painting>
        </li>
      ))}
    </ul>
  );
};

export default PaintingList;
