import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import '../assets/css/Loading.css';

function QuestionContainer() {
  const { questionNumber } = useParams();
  const QuestionComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
      try {
        const component = import(
          /* webpackChunkName: "Question" */
          `../components/Question${questionNumber}`
        );
        setTimeout(() => {
          resolve(component);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    });
  });

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <QuestionComponent />
      </Suspense>
    </div>
  );
}

export default QuestionContainer;
