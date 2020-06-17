import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin-bottom: ${props => (props.last ? '0' : '15px')};
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
`;

const Image = styled.Image`
  border-radius: 9px;
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
`;

const TextContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 5px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 900;
`;

const ReleaseData = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

export {Container, Image, TextContainer, Title, ReleaseData};
