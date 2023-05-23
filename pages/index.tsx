import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { NextPage } from 'next';
import axios from 'axios';
import { BASE_URL } from '../utils';
import {Video} from '../types'
import NoResults from '@/components/NoResults';
import VideoCard from '@/components/VideoCard';

const inter = Inter({ subsets: ['latin'] })

interface IProps {
  videos: Video[]
}

const Home = ({videos}: IProps) => {
  console.log(videos);
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id}/>
        ))
      ): (
        <NoResults text={'No Videos'}/>
      )}
    </div>
  );
}

// rerender the page on each request using the data returned by
// getServerSideProps
export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};

export default Home