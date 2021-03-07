import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

export default function Post({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date}></Date>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  )
}
