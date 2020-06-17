import {useEffect} from 'react';
import {useInjectSaga, useInjectReducer} from 'redux-injectors';
import {useDispatch, useSelector} from 'react-redux';
import {name, actions, reducer, saga} from '../../store/ducks/movies';

const useMovieList = () => {
  useInjectReducer({key: name, reducer});
  useInjectSaga({key: name, saga});

  const dispatch = useDispatch();
  const {movie} = useSelector(state => state);

  useEffect(() => {
    if (!movie.loading) {
      dispatch(actions.fetch());
    }
  }, [dispatch, movie.loading]);

  return movie;
};

export default useMovieList;
