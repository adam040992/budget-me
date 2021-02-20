import { ThemeProvider } from 'styled-components';
import { Navigation } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from 'utils/theme';
import GlobalStyles from './index.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

        <Router>
          <Navigation items={[
            { content: 'Homepage', to: '/' },
            { content: 'Budget', to: '/budget'}
          ]} />

          <Switch>
            <Route exact path="/">
              Homepage
            </Route>
            <Route path="/budget">
              Budget page
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
