import React, { FC } from 'react';
import Layout from '../../components/layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Submit: FC = () => (
    <Layout title="Submit">
        <h1>Submit New Post</h1>
        <Formik
            initialValues={{
                title: '',
                content: '',
            }}
            onSubmit={(post, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(post));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="title" placeholder="Post Title" />

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

export default Submit;
