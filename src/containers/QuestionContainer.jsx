import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import '../assets/css/Loading.css';
import '../assets/css/QuestionContainer.css';

function QuestionContainer() {
  const { questionNumber } = useParams();
  const QuestionComponent = React.lazy(() =>
    import(
      /* webpackChunkName: "Question" */
      `../components/Question${questionNumber}`
    )
  );

  return (
    <div className="QuestionContainer">
      <Suspense fallback={<Loading />}>
        <QuestionComponent />
      </Suspense>
    </div>
  );
}

export default QuestionContainer;
