import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAllComments } from 'src/app/comment/store/comment.selectors';
import { selectRouteParams } from 'src/app/router.selectors';
import { Categories } from 'src/app/shared/types/categories.enum';
import { EpisodeFull } from '../types/episode.model';
import { episodeAdapter, EpisodeFeatureKey, EpisodeState } from './episode.reducer';

export const selectEpisodeState = createFeatureSelector<EpisodeState>(EpisodeFeatureKey);
export const { selectEntities, selectAll } = episodeAdapter.getSelectors();
export const selectAllEpisodes = createSelector(selectEpisodeState, selectAll);
export const selectEpisodeEntities = createSelector(selectEpisodeState, selectEntities);
export const selectEpisode = createSelector(
    selectEpisodeEntities,
    selectRouteParams,
    (episodes, { id }) => episodes[id]
);
export const selectEpisodesAreLoading = createSelector(selectEpisodeState, (episodeState) => episodeState.isLoading);
export const selectSelectedEpisode = createSelector(selectEpisodeState, (episodeState) => episodeState.selectedEpisode);

export const selectFullEpisodes = createSelector(selectAllEpisodes, selectAllComments, (episodes, comments) => {
    const episodesFull: EpisodeFull[] = [];
    episodes.forEach((ep) => {
        episodesFull.push({
            id: ep.id,
            properties: {
                author: 'blargh',
                comments: comments.filter(
                    (c) => c.properties.collection === Categories.EPISODES && c.properties.postId === ep.id
                ),
                date: ep.properties.date,
                description: ep.properties.description,
                poster: ep.properties.poster,
                links: {
                    applePodcasts: ep.properties.links.applePodcasts,
                    iHeartRadio: ep.properties.links.iHeartRadio,
                    iTunes: ep.properties.links.iTunes,
                    podBean: ep.properties.links.podBean,
                    youTube: ep.properties.links.youTube,
                },
                slug: ep.properties.slug,
                title: ep.properties.title,
                visible: ep.properties.visible,
                year: ep.properties.year,
            },
        });
    });
    return episodesFull;
});

export const selectFullSingleEpisode = createSelector(selectEpisode, selectAllComments, (episode, comments) => {
    const fullEpisode: EpisodeFull = {
        id: episode?.id,
        properties: {
            author: 'meh',
            comments: comments.filter(
                (c) => c.properties.collection === Categories.EPISODES && c.properties.postId === episode?.id
            ),
            date: episode?.properties.date,
            description: episode?.properties.description,
            poster: episode?.properties.poster,
            links: {
                applePodcasts: episode?.properties.links.applePodcasts,
                iHeartRadio: episode?.properties.links.iHeartRadio,
                iTunes: episode?.properties.links.iTunes,
                podBean: episode?.properties.links.podBean,
                youTube: episode?.properties.links.youTube,
            },
            slug: episode?.properties.slug,
            title: episode?.properties.title,
            visible: episode?.properties.visible,
            year: episode?.properties.year,
        },
    };
    return fullEpisode;
});
