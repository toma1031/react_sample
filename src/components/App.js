import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Default from './Default';

class App extends Component {
    render() {
        return (
          // 今回のアプリケーションではルーティングにReactのルーティングライブラリであるreact-router-domを使用しています。このreact-router-domはReactの開発に基本的に欠かせないライブラリであり、App.jsで宣言しておく必要があります。ですので、App.jsの
          // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
          // でそれらを宣言しています。
          // Routerはルーティングを行うためのコンポーネントで、Switchは<Route >コンポーネント（URLとコンポーネントを指定）を指定する際に括る上位コンポーネントです。App.jsやDefault.jsの構成を見ていただくとこれらが埋め込まれていることが分かると思います。Switchを用いることでURLによってコンポーネントを切り替えることが実現できるようになっています。
          // より詳しい内容は、こちらが公式ですので、こちらを見ていただくと良いかと思います。
          // https://reactrouter.com/web/guides/quick-start
          <Router>
            <Switch>
              {/* path=で見せたいページのURL名を指定、component=でそのURL名で表示させたいコンポーネント名を記載 */}
              <Route path="/" component={Default} />
            </Switch>
          </Router>
        );
    }
}
export default App;