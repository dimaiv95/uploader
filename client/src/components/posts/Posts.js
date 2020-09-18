import React from "react";
import { useGetAllPosts } from "../../hooks";
import ImageItem from "../post";

import Spiner from "../spiner";
import Empty from "../empty";

import "./Posts.scss";

const PostsView = ({ data }) => {
    return(
        <div className="posts__row">
        {
            data.map(({ _id, image: { thumbnail, medium }, color }) => {
                const photo = {
                    _id,
                    color,
                    thumbnail: thumbnail.url,
                    medium: medium.url
                };

                return(
                    <div key={ _id } className="posts__col">
                        <ImageItem { ...photo } />
                    </div>
                );
            })
        }
        </div>
    );
};

const Posts = () => {
    const { loading, data, error } = useGetAllPosts();

    const hasData = (!loading && !error);

    const errorComponent = error ? <Empty /> : null;
    const loadingComponent = loading ? <Spiner /> : null;
    const emptyComponent = hasData && !data.length ? <Empty /> : null;
    const dataComponent = hasData && data.length ? <PostsView data={ data } /> : null;

    return(
        <div className="posts">
            <div className="posts__content">
                { loadingComponent }
                { errorComponent }
                { emptyComponent }
                { dataComponent }
            </div>
        </div>
    );
};

export default Posts;