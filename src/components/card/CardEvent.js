// import PropTypes from "prop-types";

import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock,
} from "react-icons/fa";
import { dateFormat, durationFormat } from "utils";
import { iconSize } from "constants";
import { Card, EventName, EventInfo, Chip } from "./CardEvent.styled";

// import { dateFormat } from "utils/formatData";
// import { durationFormat } from "utils/durationFormat";

const CardEvent = ({ name, location, speaker, type, start, end }) => {
    const startTime = dateFormat(start);
    const distance = durationFormat(start, end);
    return (
        <Card>
            <EventName>{name}</EventName>
            <EventInfo>
                <FaMapMarkerAlt size={iconSize.small}></FaMapMarkerAlt>
                Lokation: {location}
            </EventInfo>
            <EventInfo>
                <FaUserAlt size={iconSize.small}></FaUserAlt>
                speaker: {speaker}
            </EventInfo>
            <EventInfo>
                <FaCalendarAlt size={iconSize.small}></FaCalendarAlt>
                Start: {startTime}
            </EventInfo>
            <EventInfo>
                <FaClock size={iconSize.small}></FaClock>
                Duration: {distance}
            </EventInfo>
            <Chip type={type}>{type}</Chip>
        </Card>
    );
};

export default CardEvent;

// CardEvent.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.string.isRequired,
//   end: PropTypes.string.isRequired,
// };
