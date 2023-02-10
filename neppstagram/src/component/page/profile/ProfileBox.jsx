import styled from "styled-components";

function ProfileBox() {
  return (
    <Continer>
      <ImgBox>
        <img src="" alt="" />
      </ImgBox>
      <UserName>황보석</UserName>
    </Continer>
  );
}

const Continer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #eee;
`;
const ImgBox = styled.div`
  width: 200px;
  height: 200pc;
  border-radius: 50px;
  background-color: #eee;
`;
const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 20px;
`;

export default ProfileBox;
