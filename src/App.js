import Footer from 'components/Footer';
import Main from 'views/Main';
import Navigation from 'components/Navigation';
import { Route, Switch } from 'react-router-dom';

import PrivacyPolicy from 'views/privacyPolicy/PrivacyPolicy';
import Rider from 'views/rider/Rider';
import ScrollToTop from 'components/ScrollToTop';
import TermsAndConditions from 'views/termsAndConditions/TermsAndConditions';

function App() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/rider" render={() => <Rider />} />
        <Route exact path="/privacy-policy" render={() => <PrivacyPolicy />} />
        <Route
          exact
          path="/terms-and-conditions"
          render={() => <TermsAndConditions />}
        />
        <Route component={() => <div>Not Found</div>} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
