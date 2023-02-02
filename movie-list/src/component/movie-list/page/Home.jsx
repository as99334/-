import styled from "styled-components";
import Contentlist from "../Contentlist";

const filters = {
  trend: [
    { id: 1, text: "오늘", url: "/trending/all/day", active: true },
    { id: 2, text: "이번주", url: "/trending/all/week", active: false },
  ],
  popular: [
    { id: 1, text: "영화", url: "/movie/popular/", active: true },
    { id: 2, text: "TV", url: "tv/popular/", active: false },
    { id: 3, text: "인물", url: "person/popular/", active: false },
  ],
};

function Home() {
  return (
    <Container>
      <Contentlist title="트렌딩" filter={filters.trend} />
      <Contentlist title="what's Popular" filter={filters.popular} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default Home;
