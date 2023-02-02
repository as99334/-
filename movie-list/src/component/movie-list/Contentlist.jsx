import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { tmdbAxios } from "../../api/tmdbAxious";
import ContentItem from "./ContentItem";
import TitleBox from "./TitleBox";

function Contentlist({ title, filter }) {
  const [state, setSate] = useState(null);
  console.log(process.env.REACT_APP_TMDB_APP_API_KEY);

  const fetchData = useCallback(async (url) => {
    let { data } = await tmdbAxios.get(url);
    setSate(data.results);
  }, []);

  useEffect(() => {
    fetchData(filter[0].url);
  }, [filter, fetchData]);
  console.log("sdsdsdsd");

  console.log(state);

  if (!state) return <div>로딩중</div>;

  return (
    <Container>
      <TitleBox filter={filter} title={title} fetchData={fetchData} />
      <ItemList>
        {state.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ItemList>
    </Container>
  );
}
const Container = styled.div`
  padding: 10px 0;
`;

const ItemList = styled.ul`
  display: flex;
  margin-top: 20px;
  overflow-x: auto;
`;

export default Contentlist;
