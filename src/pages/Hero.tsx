import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const Hero = () => {
  const [search, setSearch] = useState<any>();

  let url: string;
  let idHero: string;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idHero = url.split("id=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${idHero}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setSearch(preview.data.data.results);
      });
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center text-center align-items-center"
      style={{ width: "100%", maxWidth: "100%" }}
    >
      {search && (
        <div className="response-field d-flex flex-row flex-wrap p-4 justify-content-center">
          <div
            className="hero-title d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <a href="/" style={{ width: "500px", textDecoration: "none" }}>
              MYSUPERHERO
            </a>
          </div>
          <>
            {search.map((hero: any) => {
              return (
                <div className="mb-4 select-field">
                  <div
                    className="d-flex m-5 "
                    style={{ backgroundColor: "#000" }}
                  >
                    <img
                      className="thumbnail-hero"
                      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    />
                    <div className="p-4" style={{ width: "100%" }}>
                      <h1 className="text-light">{hero.name}</h1>
                      {hero.description && (
                        <p className="text-light">
                          Descrição: {hero.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d-flex">
                    {hero.comics.returned !== 0 && (
                      <div>
                        <h3>Comics</h3>
                        <ul>
                          {hero.comics.items.map((comic) => {
                            return (
                              <li className="list-group-item">{comic.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.events.returned !== 0 && (
                      <div>
                        <h3>Eventos</h3>
                        <ul>
                          {hero.events.items.map((event) => {
                            return (
                              <li className="list-group-item">{event.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.series.returned !== 0 && (
                      <div>
                        <h3>Series</h3>
                        <ul>
                          {hero.series.items.map((serie) => {
                            return (
                              <li className="list-group-item">{serie.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.stories.returned !== 0 && (
                      <div>
                        <h3>Histórias</h3>
                        <ul>
                          {hero.stories.items.map((storie) => {
                            return (
                              <li className="list-group-item">{storie.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
};

export default Hero;
