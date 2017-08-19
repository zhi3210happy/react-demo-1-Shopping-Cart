
import Index from '../components/Index';
import Main from '../components/Main'
import Destination from '../components/Destination';
import Plan from '../components/Plan';
import Detail from '../components/Detail';

const configRoutes = [
    {
        component: Main,
        routes: [{
            path: '/',
            exact: true,
            component: Index
        },
        {
            path: '/about',
            component: Destination
        },
        {
            path: '/topics',
            component: Plan
        },
        {
            path: '/detail/:topicId',
            component: Detail
        }
        ]
    }
]

export default configRoutes