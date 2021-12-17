import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Book from "../components/Book";

var ThemeRoutes = [
    {
        path: '/1',
        name: '1. అర్జునవిషాదయోగః',
        // icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/2',
        name: '2. సాంఖ్యయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/3',
        name: '3. కర్మయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/4',
        name: '4. జ్ఞానయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/5',
        name: '5. సన్న్యాసయోగః',
        // icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/6',
        name: '6. ధ్యానయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/7',
        name: '7. జ్ఞానవిజ్ఞానయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/8',
        name: '8. అక్షరబ్రహ్మయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/9',
        name: '9. రాజవిద్యా రాజగుహ్యయోగః',
        // icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/10',
        name: '10. విభూతియోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/11',
        name: '11. విశ్వరూపదర్శనయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/12',
        name: '12. భక్తియోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/13',
        name: '13. క్షేత్రక్షేత్రజ్ఞవిభాగయోగః',
        // icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/14',
        name: '14. గుణత్రయవిభాగయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/15',
        name: '15. పురుషోత్తమయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/16',
        name: '16. దైవాసురసంపద్విభాగయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/17',
        name: '17. శ్రద్ధాత్రయవిభాగయోగః',
        // icon: 'mdi mdi-toggle-switch',
        component: Book
    },
    {
        path: '/18',
        name: '18. మోక్షసన్న్యాసయోగః',
        icon: 'mdi mdi-toggle-switch',
        component: Book
    }
];

var ThemeRoutesOrig = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'ti-loop',
        component: Starter
    },
    {
        path: '/alert',
        name: 'Alerts',
        icon: 'mdi mdi-comment-processing-outline',
        component: Alerts
    },
    {
        path: '/badge',
        name: 'Badges',
        icon: 'mdi mdi-arrange-send-backward',
        component: Badges
    },
    {
        path: '/button',
        name: 'Buttons',
        icon: 'mdi mdi-toggle-switch',
        component: Buttons
    },
    {
        path: '/card',
        name: 'Cards',
        icon: 'mdi mdi-credit-card-multiple',
        component: Cards
    },
    {
        path: '/grid',
        name: 'Grid',
        icon: 'mdi mdi-apps',
        component: LayoutComponent
    },
    {
        path: '/pagination',
        name: 'Pagination',
        icon: 'mdi mdi-priority-high',
        component: PaginationComponent
    },
    {
        path: '/popover',
        name: 'Popover',
        icon: 'mdi mdi-pencil-circle',
        component: PopoverComponent
    },
    {
        path: '/ui-components/tooltip',
        name: 'Toltips',
        icon: 'mdi mdi-image-filter-vintage',
        component: TooltipComponent
    },
    {path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true}
];
export default ThemeRoutes;
