import React, { FC } from 'react';
import Layout from '../../components/layout';
import { InferGetServerSidePropsType, GetStaticPropsContext } from 'next';
import { prisma } from '../../prisma/client';

export const getServerSideProps = async (context: GetStaticPropsContext) => ({
    props: {
        post: await prisma.post.findOne({
            where: {
                id: context.params?.id as string,
            },
        }),
    },
});

type PostIdProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const PostId: FC<PostIdProps> = ({ post }) => {
    if (!post)
        return (
            <Layout title="Post">
                <h1>Post not found.</h1>
            </Layout>
        );

    return (
        <Layout title="Post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </Layout>
    );
};

export default PostId;
