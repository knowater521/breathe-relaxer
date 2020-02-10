import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import RelaxCircle from './components/RelaxCircle';
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
import styled from 'styled-components';
const StyledBody = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <StyledBody>
        <RelaxCircle />
      </StyledBody>
      <Footer />
    </Suspense>
  );
};
export default App;
