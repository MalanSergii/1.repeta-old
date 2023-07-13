import styled from "@emotion/styled";
import { setBgColor } from "utils/setIconBgc";

const Card = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 10px;
    border-radius: 4px;
    min-width: 300px;
    margin: 20px;
    transition: scale 200ms linear;

    :hover {
        scale: 1.05;
    }
`;

const EventName = styled.h4`
    text-transform: uppercase;
`;

const EventInfo = styled.p`
    display: flex;
    align-items: center;

    svg {
        color: burlywood;
        display: block;
        color: burlywood;
        margin-right: 5px;
    }
`;

const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    border-radius: 4px;
    padding: 5px;
    color: white;
    text-transform: uppercase;

    background-color: ${setBgColor};
`;

export { Card, EventName, EventInfo, Chip };
