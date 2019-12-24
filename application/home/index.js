import universal from 'react-universal-component';
import Loading from '#application/loading';

export default universal(() => import('./home'), {
  loading: Loading
});
