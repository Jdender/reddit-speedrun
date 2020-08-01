import React, { FC } from 'react';
import Layout from '../components/layout';
import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { prisma } from '../prisma/client';

export const getServerSideProps = async () => ({
    props: {
        posts: await prisma.post.findMany(),
    },
});

type IndexProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Index: FC<IndexProps> = ({ posts }) => (
    <Layout title="Home">
        <ul>
            {posts.map((post, i) => (
                <li key={i}>
                    <Link href={`/post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

export default Index;
