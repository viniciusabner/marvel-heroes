import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

const Heroes = () => {
  const [search, setSearch] = useState<any>();

  let url: any;
  let nameHero: any;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    nameHero = url.split("name=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setSearch(preview.data.data.results);
      });
  }, []);

  console.log(search, "search");
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
                <a
                  href={`/hero?id=${hero.id}`}
                  className="m-4 select-field"
                  // onClick={(event: React.MouseEvent<HTMLElement>) => {
                  //   event.preventDefault();
                  //   selectHero();
                  // }}
                >
                  <p className="">{hero.name}</p>
                  <img
                    className="thumbnail-hero"
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  />
                </a>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
};

export default Heroes;
