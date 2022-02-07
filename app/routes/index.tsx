import type { LinksFunction, MetaFunction } from 'remix'
import { Link } from 'remix'

import stylesUrl from '../styles/indes.css'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesUrl }
]

export const meta: MetaFunction = () => {
    return {
        title: `Remix: So great it's funny`,
        description: 'Learn Remix and laugh at the same time!'
    }
}


export default function IndexRoute() {
    return (
        <div className={'container'}>
            <div className={'content'}>
                <h1>
                    Remix <span>Jokes!</span>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={'jokes'}>Read Jokes</Link>
                        </li>
                        <li>
                            <Link to={'jokes.rss'} reloadDocument>RSS</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
