import { selectCurrentUser, useRefresh } from 'features/user'
import { Suspense, lazy, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoadingPage from './loading-page'

const MainPage = lazy(() => import('./main-page'))
const LoginPage = lazy(() => import('./login-page'))
const RegistrationPage = lazy(() => import('./registration-page'))
const VerificationPage = lazy(() => import('./verification-page'))
const ChangeEmailPage = lazy(() => import('./change-email-page'))
const NewPasswordPage = lazy(() => import('./new-password-page'))

const Routing = () => {
    const user = useSelector(selectCurrentUser)
    const [loading, setLoading] = useState(true)
    const refresh = useRefresh()
    const navigate = useNavigate()

    const init = async () => {
        setLoading(true)
        await refresh()
        navigate('/')
        setLoading(false)
    }

    useEffect(() => {
        init()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <LoadingPage />
    } else {
        if (user.isAuth) {
            if (user.verified) {
                return (
                    <Suspense fallback={<LoadingPage />}>
                        <Routes>
                            <Route path="/*" element={<MainPage />} />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </Suspense>
                )
            } else {
                return (
                    <Suspense fallback={<LoadingPage />}>
                        <Routes>
                            <Route path="/" element={<VerificationPage />} />
                            <Route
                                path="/change-email"
                                element={<ChangeEmailPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </Routes>
                    </Suspense>
                )
            }
        } else {
            return (
                <Suspense fallback={<LoadingPage />}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route
                            path="/registration"
                            element={<RegistrationPage />}
                        />
                        <Route
                            path="/new-password"
                            element={<NewPasswordPage />}
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            )
        }
    }
}

export default Routing
