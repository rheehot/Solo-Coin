import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from './firebase';
import Container from './Container';
import logo from './logo.png';

const Title = styled.h2`
  text-align: center;
  color: black;
  font-size: 50px;
  font-weight: 200;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
`;

const Number = styled.h3`
  font-size: 40px;
  font-weight: bold;
`;

const HomeIntro = () => {

  const [money, setMoney] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .onSnapshot((snapshot) => {
        let sumOfMoney = 0, sumOfTime = 0;
        snapshot.docs.forEach((doc) => {
          const moneyObj = doc.data()['money'];
          const timeObj = doc.data()['time'];
          Object.keys(moneyObj).forEach((key, _) => sumOfMoney += moneyObj[key]);
          Object.keys(timeObj).forEach((key, _) => sumOfTime += timeObj[key]);
        });
        setMoney(sumOfMoney);
        setTime(sumOfTime);
      });
  }, []);

  return (
    <Container>
      <Logo src={logo} alt="로고" />
      <Title>1명의 솔로들이 얻은 이득</Title>
      <Number>{money}원</Number>
      <Number>{time}분</Number>
    </Container>
  );
};

export default HomeIntro;