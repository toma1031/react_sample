import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import Top from './Top';

//APIURL
// export const apiURL = 'http://localhost:8000/';

class Default extends React.Component {
    render() {
        return (
            <div>
              {/* <Header /> */}
              <div className="main">
                  <Switch>
                      <Route exact path="/" component={Top} />
                      {/* URLが見つからなかったら下記を返す */}
                      <Route render={() => <p>not found!.</p>} />
                  </Switch>
              </div>
              {/* <Footer /> */}
            </div>
        );
    }
}
export default Default;