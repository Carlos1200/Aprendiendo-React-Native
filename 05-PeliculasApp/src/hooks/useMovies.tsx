import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  const Indicator = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator color="red" size={100} />
    </View>
  );

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
    Indicator,
  };
};