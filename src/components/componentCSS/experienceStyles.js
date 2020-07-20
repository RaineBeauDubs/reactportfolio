import styled from 'styled-components';

export const ResSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  font-size: 1.7rem
  margin: 1rem;
`;

export const ResSectionTop = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  color: rgb(68, 0, 0);
`;

export const ResSectionBottom = styled.div`
  // border: 1px solid purple;
`;

export const Sec = styled.div`
  margin: 1rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-top: 3%;
  margin-bottom: 0.17rem
`;

export const InfDtAlign = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem
`;

export const Info = styled.h3`
  font-weight: bold;
`;

export const Dates = styled.h2`
  // color: grey;
`;

export const List = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-direction: column;
  margin: .4rem 2rem;
`;

export const ListItems = styled.li`
  margin: 0.1rem;
  text-align: left;
  justify-content: space-evenly
  min-width: 35rem;
  font-size: 1.2rem;
`;