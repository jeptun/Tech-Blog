import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
        {comments.length > 0 && (
            <div className="bg-antiquewhitey dark:bg-magicBlack-600 text-magicBlack-500 dark:text-antiquewhite  transition duration-300 shadow rounded p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b border-poisongreen dark:border-royalblue pb-4">
                {comments.length}
                {' '}
                Komentáře
            </h3>
                {comments.map((comment) =>(
                    <div key={comment.createdAt} className="border-b border-gray-300 dark:border-gray-700 mb-4 pb-4">
                        <p className="mb-4">
                            <span className="font-semibold">{comment.name}</span>
                            {' '}
                            v
                            {' '}
                            {moment(comment.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <p className="whitespace-pre-line w-full">{parse(comment.comment)}</p>
                    </div>
                ))}
            </div>
        )}
    </>
  );
};

export default Comments;
