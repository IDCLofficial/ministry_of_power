import {newsList} from "../news/newsList";
import {events} from "../events/eventsList";

const newsImages = newsList.map((news) => {
    return {
        image: news.img,
        title: news.title,
        isVideo: false
    };
})
const eventsImages = events.map((event) => {
    return {
        image: event.img,
        title: event.title,
        isVideo: false
    };
});

type mediaItem = {
    image: string;
    title: string;
    isVideo: boolean;
}

export const mediaItems: mediaItem[] = [...newsImages, ...eventsImages];