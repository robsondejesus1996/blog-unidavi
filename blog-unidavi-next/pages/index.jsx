import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';
import * as Styled from './styles';
import { theme } from '../styles/theme'
import { Heading } from '../src/components/Heading';

function Home() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
        <Styled.Wrapper>
          <GlobalStyles />
          <Heading>O texto que eu quero</Heading>
        </Styled.Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default Home;
