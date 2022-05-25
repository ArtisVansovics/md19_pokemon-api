import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../store/api/pokemon';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import MoveCard from '../../components/MoveCard/MoveCard';
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary';

const PokemonPage = () => {
  const { name } = useParams();
  const [currentMove, setCurrentMove] = useState(0);
  const [visibleMoves, setVisibleMoves] = useState<any[]>();
  const [startOfMoves, setStartOfMoves] = useState(0);
  const [endOfMoves, setEndOfMoves] = useState(30);
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(String(name));

  useEffect(() => {
    if (data) {
      setVisibleMoves([...data.moves.slice(startOfMoves, endOfMoves)]);
    }
  }, [startOfMoves, endOfMoves, isSuccess]);

  return (
    <div className="page">
      <div className="container width-max">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title underline">{name && name.charAt(0).toUpperCase() + name.slice((1))}</h1>
              {isLoading && <Loader />}
            </div>
          </div>
        </div>
        {data && (
          <div className="row center-xs middle-xs">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                {data && (
                  <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
                )}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              {data && (
                <div className="box">
                  <p className="page__text page__text--description">
                    {`ID: ${data.id}`}
                  </p>
                  <p className="page__text page__text--description">
                    {`Weight: ${data.weight}`}
                  </p>
                  <p className="page__text page__text--description">
                    {`Height: ${data.height}`}
                  </p>
                  <p className="page__text page__text--description">
                    {`Base experience: ${data.base_experience}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="col-xs-12">
          <div className="box">
            <h2 className="page__title page__title--small">Moves</h2>
          </div>
        </div>
        <div className="row center-xs middle-xs">
          <div className="col-xs-12 col-sm-6 last-sm">
            <div className="box">
              {!currentMove && <h3>Select a move</h3>}
              {currentMove !== 0 && (
                <MoveCard id={currentMove} />
              )}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            {data && (
              <div className="box">
                <ButtonSecondary
                  title="Show previous moves"
                  onClick={() => {
                    setStartOfMoves(startOfMoves - 30);
                    setEndOfMoves(endOfMoves - 30);
                  }}
                  disabled={startOfMoves === 0}
                />
                <div className="grid-auto grid-auto--narrow">
                  {visibleMoves && visibleMoves.map((move: any) => {
                    const url = move.move.url.split('/');
                    const id = url[url.length - 2];

                    return (
                      <Button
                        key={move.move.name}
                        title={move.move.name.toUpperCase()}
                        onClick={() => setCurrentMove(id)}
                      />
                    );
                  })}
                </div>
                <ButtonSecondary
                  title="Show next moves"
                  onClick={() => {
                    setStartOfMoves(startOfMoves + 30);
                    setEndOfMoves(endOfMoves + 30);
                  }}
                  disabled={endOfMoves >= data.moves.length}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
