import { apiInitializer } from 'discourse/lib/api';
import TcRightSideBar from '../components/tc-subscription-bar';

export default apiInitializer('1.14.0', (api) => {
    api.renderInOutlet(settings.plugin_outlet.trim(), TcRightSideBar);
});