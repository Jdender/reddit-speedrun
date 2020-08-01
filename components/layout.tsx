import React, { FC } from 'react';
import Head from 'next/head';

interface LayoutPropts {
    title: string;
}

const Layout: FC<LayoutPropts> = (props) => (
    <div>
        <Head>
            <title>{props.title} × Reddit Speedrun</title>
        </Head>

        <header>
            <h1>Header</h1>
        </header>
        <main>{props.children}</main>
        <footer>
            <h1>Footer</h1>
        </footer>

        <style jsx>{`
            div {
                height: 100vh;
                width: 50vw;
                margin: auto;

                display: grid;
                grid-template-rows: auto 1fr auto;
            }
        `}</style>

        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

            :root {
                font-family: 'Roboto', sans-serif;
                background-color: #23272a;
                color: #ffffff;
                --card-bg: #2c2f33;
            }

            html,
            body {
                padding: 0;
                margin: 0;
            }
        `}</style>
    </div>
);

export default Layout;
