import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navigation, Wrapper, LoadingIndicator } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from 'utils/theme';
import GlobalStyles from './index.css';
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <GlobalStyles />

        <Router>
          <Navigation items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget'}
          ]} 
          RightElement = {(
            <div>
              <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
          )}
          />

          <Wrapper>
            <Switch>
              <Route exact path="/">
                Homepage
              </Route>
              <Route path="/budget">
                Budget page
              </Route>
            </Switch>
          </Wrapper> 
        </Router>
    </>
  );
}

const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
