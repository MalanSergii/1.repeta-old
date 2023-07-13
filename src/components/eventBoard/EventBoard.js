import CardEvent from "components/card";
// import css from "./EventBoard.module.css";
import PropTypes from "prop-types";
import { Board } from "./EventBoard.styled";
const EventBoard = ({ events }) => {
    return (
        <Board
        // className={css.board}
        >
            {events.map(({ name, location, speaker, type, time }) => (
                <CardEvent
                    key={name}
                    name={name}
                    location={location}
                    speaker={speaker}
                    type={type}
                    start={time.start}
                    end={time.end}
                />
            ))}
        </Board>
    );
};

export default EventBoard;

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }),
        })
    ),
};
