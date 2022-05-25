import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonQuery } from '../../store/api/pokemon';
import Loader from '../../components/Loader/Loader';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const HomePage = () => {
  const { data, isLoading } = useGetAllPokemonQuery();
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">Pokemon</h1>
              {isLoading && <Loader />}
              <div className="grid-auto">
                {data && data.results.map((pokemon) => {
                  const arr = pokemon.url.split('/');
                  const id = arr[arr.length - 2];

                  return (
                    <PokemonCard
                      key={pokemon.name}
                      name={pokemon.name}
                      // eslint-disable-next-line max-len
                      imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
