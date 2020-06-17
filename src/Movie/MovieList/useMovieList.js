import {useEffect} from 'react';
import {useInjectSaga} from 'redux-injectors';
import {useDispatch, useSelector} from 'react-redux';
import {name, actions, saga} from '../../store/ducks/movies';

const useMovieList = () => {
  useInjectSaga({key: name, saga});

  const dispatch = useDispatch();
  const {movie} = useSelector(state => state);

  useEffect(() => {
    if (!movie.loading && !movie.movies.length) {
      dispatch(actions.fetch());
    }
  });

  return movie;
};

export default useMovieList;
