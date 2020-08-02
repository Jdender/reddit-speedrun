import React, { FC } from 'react';
import Layout from '../../components/layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Post } from '../../prisma/validate';
import { useRouter } from 'next/router';

const Submit: FC = () => {
    const router = useRouter();

    return (
        <Layout title="Submit">
            <h1>Submit New Post</h1>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                }}
                validationSchema={Post}
                onSubmit={async (post, { setSubmitting }) => {
                    await fetch('/api/post/submit', {
                        method: 'POST',
                        body: JSON.stringify(post),
                    });
                    setSubmitting(false);
                    router.push('/');
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            type="text"
                            name="title"
                            placeholder="Post Title"
                        />

                        <ErrorMessage name="title" component="div" />

                        <Field
                            type="textarea"
                            name="content"
                            placeholder="Post Content"
                        />

                        <ErrorMessage name="content" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default Submit;
