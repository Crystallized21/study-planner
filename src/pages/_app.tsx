import '../app/globals.css';
import type { AppProps } from 'next/app';
import { AssignmentsProvider } from '@/context/AssignmentsContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AssignmentsProvider>
            <Component {...pageProps} />
        </AssignmentsProvider>
    );
}

export default MyApp;
