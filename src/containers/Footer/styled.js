import styled from 'styled-components';

export const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  color: #fefdfc;
  position: fixed;
  justify-content: center;
  background-color: #3c454c;
`;

export const Copyright = styled.span`
  padding: 12px;
  display: block;
  margin: 0 50px;
`;

export const FooterList = styled.ul`
  display: flex;
  padding: 12px;
  list-style: none;
`;

export const FooterListItem = styled.li`
  margin: 0 25px;
  cursor: pointer;
`;
