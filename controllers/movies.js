import { v4 as uuidv4 } from 'uuid';

let movies = [
    {
        title: "Inception",
        releaseDate: "18-02-2016",
        openingText: "Night",
        id: uuidv4()
    },
    {
        title: "Zodiac",
        releaseDate: "19-01-2021",
        openingText: "Hello",
        id: uuidv4()
    },
    {
        title:"Jane",
        releaseDate: "20-10-2022",
        openingText: "Hello",
        id: uuidv4()
    },
    {
        title:"Loki",
        releaseDate: "19-10-2009",
        openingText: "Morning",
        id: uuidv4()
    }
];

export const getMovies = (req, res) => {
    res.send(movies);
}

export const createMovie = (req, res) => {
    const movie = req.body;
    const title = req.body.title;

    if (title){
    //spread user will fetch all fields of user then add generated password
    movies.push({ ...movie, id: uuidv4() }); 

    res.send(`Movie with the title ${movie.title} added to the database!`);
} 

    else {
        res.send('Please enter valid username.');
    }
}

export const getMovie = (req, res) => {
    const { id } = req.params;
    
    const foundmovie = movies.find((movie) => movie.id == id);

    res.send(foundmovie);

}

export const deleteMovie = (req, res) => {
    const { password } = req.params;

    /*the fitler function will filter(delete) any id that generates
    a false check for the condition. */
    movies = movies.filter((movie) => user.id !== id);

    res.send(`Movie with the id ${id} deleted from the database!`);

}

export const updateMovie = (req, res) => {
    const { id } = req.params;

    const { title, releaseDate, openingText } = req.body;
    
    const movie = movies.find((movie) => movie.id == id);

    //can be written as if(title) movie.title = title;
    if(title) {
        movie.title = title;
    }

    //can be written as if (releaseDate) movie.releaseDate = releaseDate;
    if(releaseDate) {
        movie.releaseDate = releaseDate;
    }

    //can be written as if(age) user.age= age;
    if(openingText) {
        movie.openingText = openingText;
    }

    res.send(`Movie with the id ${id} has been updated!`);
}
