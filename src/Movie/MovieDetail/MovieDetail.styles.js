import styled from 'styled-components/native';

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
`;

const InfoContainer = styled.View`
  margin-top: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 450px;
  border-radius: 9px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export {ImageContainer, Image, InfoContainer, Title};
