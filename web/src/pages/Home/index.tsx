import React from "react";
import styled from "styled-components";
import CourtOverview from "./CourtOverview";
import LatestCases from "./LatestCases";
import Community from "./Community";
import Header from "./Header";
import { HomePageProvider } from "hooks/useHomePageContext";
import { getOneYearAgoTimestamp } from "utils/date";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 144px);
  background-color: ${({ theme }) => theme.lightBackground};
  padding: calc(32px + (132 - 32) * (min(max(100vw, 375px), 1250px) - 375px) / 875);
  padding-top: calc(32px + (64 - 32) * (min(max(100vw, 375px), 1250px) - 375px) / 875);
  padding-bottom: calc(64px + (96 - 64) * (min(max(100vw, 375px), 1250px) - 375px) / 875);
`;

const Home: React.FC = () => {
  return (
    <HomePageProvider timeframe={getOneYearAgoTimestamp()}>
      <Header />
      <Container>
        <CourtOverview />
        <LatestCases />
        <Community />
      </Container>
    </HomePageProvider>
  );
};

export default Home;
