import universal from 'react-universal-component';
import Loading from '#application/loading';

export default universal(() => import('./not-found'), {
  loading: Loading
});
