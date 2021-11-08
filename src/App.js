

import React from "react";

import { useState } from "react";
import './app.css'

const movies = {
  action: [
    {
      name: "The Raid Redemption",
      year: "2011",
      country: "Indonesia",
      desc:
        "After getting stuck inside a 15-storey safe house belonging to drug lord Tama, Rama and his team must use the little ammunition they have to take him down and survive the unofficial mission"
    },
    {
      name: "Exiled",
      year: "2006",
      country: "Hongkong",
      desc:
        "When former gangster Johnnie Wo returns to raise a family on his old boss's territory, four assassins are sent by the boss to despatch him. However, all four are Wo's childhood friends, and their loyalty to him, though tested, is strong"
    },
    {
      name: "Leon: The Professional",
      year: "1994",
      country: "The United States",
      desc:
        "When 12-year-old Mathilda's family is killed, her neighbour Leon, who is a professional assassin, reluctantly takes her under his wing and teaches her the secrets of his trade.."
    },
    {
      name:"Die Hard",
      year:1988,
      country:"The United States",
      desc:"Die Hard is an American action film series that originated with Roderick Thorp's novel Nothing Lasts Forever"
    },
    {
      name:"Mad Max:Fury Road",
      year:2015,
      country:"The United States",
      desc:"Haunted by his turbulent past, Mad Max believes the best way to survive is to wander alone. Nevertheless, he becomes swept up with a group fleeing across the Wasteland in a War Rig driven by an elite Imperator, Furiosa."
    }
  ],

  SciFiFantasy: [
    {
      name: "Jurassic World",
      year: "2015",
      country: "The United States",
      desc:
        "The owners of a dinosaur theme park try to attract tourists with a thrilling new exhibit, but a deadly giant breaks loose and terrorizes the island."
    },
    {
      name: "Interstellar",
      year: "2014",
      country: "The United States",
      desc:
        "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet."
    },
    {
      name: "Dune",
      year: "2021",
      country: "The United States",
      desc:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people"
    },
    {
      name:"Avatar",
      year:2009,
      country:"The United States",
      desc:"Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie."

    },
    {
      name:"The Matrix",
      year:1999,
      country:"The United States",
      desc:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    }
    
  ],
  horror: [
    {
      name: "Cure",
      year: "1997",
      country: "Japan",
      desc:
        " is part atmospheric crime film and part philosophical meditation. Detective Takabe (Koji Yakusho) is tracking a series of identical murders, committed under the same bizarre circumstances. Nothing seems to connect the murders and Takabe becomes increasingly frustrated"
    },
    {
      name: "Get Out",
      year: "2017",
      rate: "The United States",
      desc:
        "Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead"
    },
    {
      name: "Thirst",
      year: "2009",
      rate: "South Korea",
      desc:
        "Park Chan-wook’s take on the vampire genre is a loose adaptation of Zola’s Thérèse Raquin which also has quite a bit in common with the recent Netflix series Midnight Mass – how’s that for ‘elevated horror’? Director Park regular Song Kang-ho plays priest Sang-hyun who after volunteering for a vaccination trial is killed and then revived with vampire blood"
    },
    {
      
        name: "The Wailing",
        year: "2016",
        rate: "South Korea",
        desc:
          "The Wailing is an odd movie. At 156 minutes it’s loooong for a horror movie, but rightly so. After all what begins as a cop thriller soon turns into a ghost story and a zombie movie with demonic possessions and small town paranoia, creepy kids, murderous family members, paranoia, superstition, shamanism… all sorts. Though there is a lot going on in The Wailing it is surprisingly tonally consistent and genuinely unsettling, keeping you on your toes right up to the devastating final moments."
      
    },
    {
      
      name: "Train to Busan ",
      year: "2016",
      rate: "South Korea",
      desc:
        "One of the better known Korean horror flicks, zombie drama Train to Busan made international waves when it premiered in 2016, and for good reason. The action horror was the most exciting and emotionally engaging the zombie drama had been in a long time—World War Z wishes it could be this movie. The zombies in the film are properly scary: a rabid force of nature. Those infected turn fast, and don’t get any slower in their changed form, making for a literal race to presumed safety for the characters who happened to be on this train."
    
    }
],
  Romance:[
    {
      name:"Notting hill",
      year:1999,
      country:"The United States",
      desc:"William, a British bookseller, meets and falls in love with Anna, a high-profile American actress. However, their relationship goes through many problems due to their different social statuses"
    },
    {
      name:"Lost in Translation",
      year:2003,
      country:"The United States",
      desc:"An American actor Bob, lands in Tokyo for an ad film and ends up meeting Charlotte, who's left behind by her photographer husband. Gradually, the two discover a friend within each other."

    },
    {
      name:"Sadma",
      year:1983,
      country:"India",
      desc:"Somu meets Nehalata in a brothel and realises that she is suffering from amnesia which regresses her to a childlike state. He decides to take her to his home in Ooty and protect her."

    },
    {
      name:"Monpura",
      year:2009,
      country:"Bangladesh",
      desc:"After a housemaid is killed by a landlord's son, his servant takes the blame for the killing. Later, in order to save the landlord's son, the servant gets marooned on an island."
    },
    {
      name:"The NootBook",
      year:2004,
      country:"The United States",
      desc:"Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook."
    }
 
   ]
  
  }


export default function App() {
  const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Favoutite Movie from Some genre</h1>
      <p>
        
       I have always been in love with Movies. From my childhood movies helping me grow as a mature boy.Here are some of favourite movies i have listed from thousands good movie i wathced over the years. 
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li key={movie.name} className="card">
              {" "}
              <div style={{ fontSize: "larger", color: "#e50914" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", display: "inline-block" }}>
                {" "}
                {movie.year}{" "}
              </div>{" "}
              &nbsp;
              <div
                style={{
                  fontSize: "smaller",
                  display: "inline-block",
                  border: "1px solid white"
                }}
              >
                {" "}
                {movie.country}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  padding: "4px",
                  fontSize: "15px"
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
