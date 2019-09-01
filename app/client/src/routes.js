import FoundationIcons from './components/FoundationIcons';
import ResponsiveTable from './components/building-blocks/community/ResponsiveTable';

const ROUTES = [
  {
    name: 'Foundation Icons',
    icon: 'fi-address-book',
    path: '/foundationIcons',
    component: FoundationIcons
  },
  { name: '*View Responses', icon: 'fi-clipboard-notes', path: '/view' },
  {
    name: 'Responsible Table',
    icon: 'fi-alert',
    path: '/responsibleTable'
  },
  {
    name: '*Export responses',
    icon: 'fi-page-export-csv',
    path: '/exports'
  }
];

export default ROUTES;
