import React, { lazy, Suspense } from 'react'
const Setting = lazy(() => import('./SettingPage.jsx'));

const CodeSplitting = () => {
    return (
        <div>
            <h1>Welcome to the homepage</h1>
            <h3>Homepage rendered</h3>
            <Suspense fallback={<div>Loading Setting....</div>}>
                <Setting />
            </Suspense>
        </div>
    )
}

export default CodeSplitting