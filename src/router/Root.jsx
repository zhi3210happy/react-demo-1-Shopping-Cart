import React from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import configRoutes from './configRoutes'

class Root extends React.Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <Router>
                    <div style={{ height: '100%' }}>
                        {renderRoutes(configRoutes)}
                    </div>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

Root.childContextTypes = {
    store: PropTypes.object.isRequired    // childContextTypes必须声明  这一句很重要
}

export default Root
