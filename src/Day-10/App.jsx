import React from 'react'
import { Suspense, lazy, useState, useEffect } from 'react'
import PropTypes from 'prop-types';


// lazy Loading

// const MyComponent = lazy(() => import('./components/MyComponent'));

const MyComponent = lazy(() =>
    new Promise((resolve) => {
        setTimeout(() => resolve(import('./components/MyComponent'), 5000))
    })
)

// error Boundary
const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        const handleError = () => setHasError(true);
        window.addEventListener('error', handleError);
        return () => {
            window.removeEventListener('error', handleError);
        }
    }, [])
    return hasError ? <div>Error Loading component.</div> : children

}

// define error boundary

ErrorBoundary.PropTypes = {
    children: PropTypes.node.isRequired
}

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading....</div>}>
                    <MyComponent />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}

export default App