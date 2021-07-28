import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import { Route, Switch } from 'react-router-dom';
import Main from 'views/Main';

import PrivacyPolicy from 'views/privacyPolicy/PrivacyPolicy';
import Rider from 'views/rider/Rider';
import TermsAndConditions from 'views/termsAndConditions/TermsAndConditions';
import ScrollToTop from  'components/ScrollToTop';

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
