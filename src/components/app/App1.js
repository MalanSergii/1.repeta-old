import EventBoard from "components/eventBoard";
import PageTitle from "components/pageTitle";
import { Container } from "./App1.styled";

import events from "../../data/upcomingEvents.json";

const App = () => {
    return (
        <Container>
            <PageTitle text="Page Title"></PageTitle>
            <EventBoard events={events}></EventBoard>
        </Container>
    );
};

export default App;
