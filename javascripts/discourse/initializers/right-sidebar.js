import { apiInitializer } from 'discourse/lib/api';
import TcRightSideBar from '../../connectors/tc-right-sidebar';

export default apiInitializer('1.14.0', (api) => {
    api.renderInOutlet(settings.plugin_outlet.trim(), TcRightSideBar);
});