import type { LinksFunction, MetaFunction } from 'remix'
import { Links, LiveReload, Meta, Outlet, Scripts, useCatch } from 'remix'

import globalStyleUrl from './styles/global.css'
import globalMediumStyleUrl from './styles/global-medium.css'
import globalLargeStyleUrl from './styles/global-large.css'
import React from 'react'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: globalStyleUrl },
    { rel: 'stylesheet', href: globalMediumStyleUrl, media: 'print, (min-width: 640px)' },
    { rel: 'stylesheet', href: globalLargeStyleUrl, media: 'screen and (min-width: 1024px)' }
]

export const meta: MetaFunction = () => {
    const description = 'Learn Remix and laugh at the same time!'
    return {
        description,
        keywords: 'Remix,jokes',
        'twitter:image': 'https://remix-jokes.lol/social.png',
        'twitter:card': 'summary_large_image',
        'twitter:creator': '@remix_run',
        'twitter:site': '@remix_run',
        'twitter:title': 'Remix Jokes',
        'twitter:description': description
    }
}

function Document({children, title = `Remix: So great, it's funny!`}: {children: React.ReactNode, title?: string}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <Meta/>
                <title>{title}</title>
                <Links/>
            </head>
            <body>
                {children}
                <Scripts/>
                {process.env.NODE_ENV === "development" && <LiveReload/>}
            </body>
        </html>
    );
}

export default function App() {
    return (
        <Document>
            <Outlet/>
        </Document>
    )
}

export function CatchBoundary() {
    const { status, statusText } = useCatch()
    const message = `${status} ${statusText}`

    return (
        <Document title={message}>
            <div className={'error-container'}>
                <h1>{message}</h1>
            </div>
        </Document>
    )
}

export function ErrorBoundary({error}: {error: Error}) {
    console.log(error);
    return (
        <Document title={'Uh-oh!'}>
            <div className={'error-container'}>
                <h1>App Error</h1>
                <pre>{error.message}</pre>
            </div>
        </Document>
    )
}
