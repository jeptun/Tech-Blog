import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-antiquewhitey dark:bg-magicBlack-600 transition duration-300  shadow rounded p-8 pb-1 mb-8 mt-10 text-magicBlack-500 dark:text-antiquewhite">
      <h3 className="text-xl mb-8 font-semibold border-b border-poisongreen dark:border-royalblue pb-4">{slug ? 'Související příspěvky' : 'Poslední příspěvky'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-40 flex-none">
            <Image
              loader={grpahCMSImageLoader}
              alt={post.title}
              height="112px"
              width="160px"
              unoptimized
              className="align-middle "
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md " key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
