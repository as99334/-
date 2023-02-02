import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { tmdbAxios } from "../../../api/tmdbAxious";

function MovieDetail() {
  const { pathname } = useLocation();
  const [movie, setMovie] = useState(null);
  const { title, overview, poster_path, backdrop_path, release_date } =
    movie ?? {};

  console.log(poster_path);

  const url = "https://image.tmdb.org/t/p/w300" + poster_path;
  const backdrop_url = "https://image.tmdb.org/t/p/original" + backdrop_path;

  const fetchData = useCallback(async () => {
    const { data } = await tmdbAxios.get(pathname, {
      //params 옵션을 통해서 여러개의 쿼리를 쉽게 붙일 수 있다.
      params: {
        language: "ko-KR", //?language=ko-KR
      },
    });

    setMovie(data);
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (!movie) return <>로딩중</>;
  return (
    <Container backdrop_url={backdrop_url}>
      <Wrapper>
        <ImgBox>
          <img src={url} alt="" />
        </ImgBox>
        <ContentBox>
          <Title>
            {title}
            {/* 문자열.substr(시작이덱스,길이)  */}
            <span>({release_date?.substr(0, 4)})</span>
          </Title>
          <SummarYBox>
            <h4>개요</h4>
            <p>{overview}</p>
          </SummarYBox>
        </ContentBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0;
  background: fixed;

  background: center / cover no-repeat;
  background-image: url(${({ backdrop_url }) => backdrop_url});
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const ImgBox = styled.div``;

const ContentBox = styled.div`
  margin-left: 20px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700px;

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const SummarYBox = styled.div`
  margin-top: 50px;
  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export default MovieDetail;
