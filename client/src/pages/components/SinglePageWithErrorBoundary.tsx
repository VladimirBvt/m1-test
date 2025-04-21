import ErrorBoundary from '../../shared/lib/components/error-boundary/error-boundary';
import SinglePage from '../SinglePage';

const SinglePageWithErrorBoundary = () => (
  <ErrorBoundary>
    <SinglePage />
  </ErrorBoundary>
);

export default SinglePageWithErrorBoundary;
