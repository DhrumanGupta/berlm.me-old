import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeList as List} from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";
import BlogCard from "./BlogCard";
import axios from "axios";

const items = [];
const requestCache = {};
let reachedEnd = false;

const isItemLoaded = () => {
	return false;
}

const getUrl = index => {
	return `/api/blog?n=${index}`;
}

const loadMoreItems = (visibleStartIndex, visibleStopIndex) => {
	if (reachedEnd) {
		return;
	}

	const key = [visibleStartIndex, visibleStopIndex].join(":"); // gives something like 0:5
	if (requestCache[key]) {
		return;
	}

	const length = visibleStopIndex - visibleStartIndex;
	const visibleRange = [...Array(length).keys()].map(
		x => x + visibleStartIndex
	);

	visibleRange.forEach(index => {
		if (items.length > index) {
			return;
		}

		if (reachedEnd) {
			return;
		}

		// fetch data from api
		axios
			.get(getUrl(index))
			.then(resp => {
				console.log(JSON.stringify(resp.data))
				items.push(resp.data)
			})
			.catch(err => {
				reachedEnd = true;
			})
	});
}

function BlogList() {
	return (
		<div className={"container-sm"}>
			<AutoSizer>
				{({height, width}) => (
					<InfiniteLoader
						isItemLoaded={isItemLoaded}
						loadMoreItems={loadMoreItems}
						itemCount={10}
					>
						{({onItemsRendered, ref}) => (
							<List
								height={height}
								itemCount={10}
								itemSize={100}
								width={width}
								ref={ref}
								onItemsRendered={onItemsRendered}
							>
								{BlogCard}
							</List>
						)
						}
					</InfiniteLoader>
				)
				}
			</AutoSizer>
		</div>
	);
}

export default BlogList;