import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import {
    Container
} from 'reactstrap';
import Readme from './components/Readme';
import TodoList from './components/TodoList';

import './scss/App.scss';
import ImageList from './components/ImageList/ImageList';

class App extends React.Component<{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='page-wrapper'>
                <Container>
                    <Switch>
                        <Route exact path='/' component={TodoList}></Route>
                        <Route path='/readme' component={Readme}></Route>
                        <Route path='/img' component={ImageList}></Route>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default withRouter(App);
