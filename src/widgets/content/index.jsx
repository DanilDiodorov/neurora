import LoadingPage from 'pages/loading-page'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const ChatWidget = lazy(() => import('../chat'))

const Content = () => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="chat/:id" element={<ChatWidget />} />
            </Routes>
        </Suspense>
    )
}

export default Content
