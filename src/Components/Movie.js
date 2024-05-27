class Movie{
    constructor(title, desc, img_Path, rating){
        this.title = title;
        this.desc = desc;
        this.img_Path = img_Path;
        this.rating = rating;
    }
}


export function Add_Movie_(title, desc, img_Path, rating, setMovie){
    let movie = new Movie(title, desc, img_Path, rating);
    setMovie(prevMovie => [...prevMovie, movie]);
}

const movie_1 = new Movie("The Shawshank Redemption",
 "Based on a Stephen King novella, this drama tells the story of Andy Dufresne, a man sentenced to life in prison for a crime he didn't commit",
 "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
 "2.5"
);
const movie_2 = new Movie("The Godfather",
 "This crime drama, directed by Francis Ford Coppola, chronicles the powerful Italian-American crime family of Don Vito Corleone and their struggle to maintain power",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xCIs1SIq15fDZ66ciVX6JcheC_P34iXSLnoO3dOIAQ&s",
 "3.9"
);
const movie_3 = new Movie("Inception",
 "Directed by Christopher Nolan, this sci-fi thriller explores the concept of shared dreaming and follows a group of thieves who steal corporate secrets ",
 "https://m.media-amazon.com/images/M/MV5BZDkyNWQ3MzgtNjM2Yy00OTM1LTg1MTYtZTE0ZDQ3NWFhODg2XkEyXkFqcGdeQXVyODY3ODAzMzc@._V1_.jpg",
 "4.2"
);
var Movies = [movie_1, movie_2, movie_3];
export default Movies;

