import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../helpers/axios';
import DisplayPost from '../components/DisplayPost';
import AboutThread from '../components/AboutThread';
import styles from '../styles/ThreadPage.module.css';
import useInfiniteScrollPosts from '../hooks/useThreadPostInfiniteScroll';

interface UserProps {
  username: string;
}

interface DisplayPostProps {
  threadName: string;
  username: string;
  title: string;
  description: string;
  comments: any;
  likes: number;
  user_id: UserProps;
  thread_id: any;
  _id: any;
}

interface ThreadProps {
  numMembers: Number;
  numPosts: Number;
  threadCreator: string;
  threadName: string;
  threadID: any;
}

const ThreadPage = () => {
  const { threadID } = useParams();
  const endpoint = `/thread/posts/${threadID}`;
  const [threadInfo, setThreadInfo] = useState<ThreadProps | null>(null);

  // Use the custom hook for infinite scrolling
  const { posts, lastPostRef, loading, hasMore } = useInfiniteScrollPosts(
    1,
    endpoint
  );

  useEffect(() => {
    const fetchThreadInfo = async () => {
      try {
        const data = await axios.get(`/thread/posts/${threadID}`);
        setThreadInfo(data.data.threadPosts);
        console.log('data', data.data);
        setThreadInfo({
          threadID: data.data.threadID,
          threadName: data.data.threadName,
          numMembers: data.data.numMembers,
          numPosts: data.data.numPosts,
          threadCreator: data.data.threadCreator.username,
        });
      } catch (e) {
        console.log('ERROR: ', e);
      }
    };
    fetchThreadInfo();
  }, [threadID]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.left}>
          <Link to='/' className={styles.link}>
            Back home
          </Link>
          <p className={styles.link2}>r/{threadInfo?.threadName}</p>
        </div>
        {posts &&
          posts.map((post) => {
            return (
              <div ref={lastPostRef} key={post._id}>
                <DisplayPost
                  className={styles.postContainer}
                  key={post._id}
                  description={post.description}
                  title={post.title}
                  comments={post.comments}
                  likes={post.likes}
                  threadName={post.threadName}
                  username={post.user_id.username}
                  thread_id={post.thread_id}
                />
              </div>
            );
          })}
      </div>
      <div className={styles.right}>
        {threadInfo && (
          <AboutThread
            threadID={threadInfo.threadID}
            threadName={threadInfo.threadName}
            numPosts={threadInfo.numPosts}
            threadCreator={threadInfo.threadCreator}
            numMembers={threadInfo.numMembers}
          />
        )}
      </div>
    </div>
  );
};

export default ThreadPage;
