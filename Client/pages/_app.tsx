import "@/styles/globals.css";
import { Inter, Quicksand } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const clientId = process.env.GOOGLE_CLIENT_ID;

    return (
        <div className={inter.className}>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId={clientId!}>
                    <Component {...pageProps} />
                    <Toaster />
                    <ReactQueryDevtools />
                </GoogleOAuthProvider>
            </QueryClientProvider>
        </div>
    );
}
