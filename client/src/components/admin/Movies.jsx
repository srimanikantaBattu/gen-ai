import React, { useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState("");
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [castname, setcastname] = useState("");
  const [moviebase64Image1, setmovieBase64Image1] = useState("");
  const [castbase64Image1, setcastBase64Image1] = useState("");

  const [castdetails, setcastdetails] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "movies":
        setMovies(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "director":
        setDirector(value);
        break;
      case "date":
        setDate(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "duration":
        setDuration(value);
        break;
      case "castname":
        setcastname(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange1 = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setmovieBase64Image1(reader.result.toString());
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange2 = (e) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      setcastBase64Image1(reader.result.toString());
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      movies,
      category,
      director,
      date,
      genre,
      language,
      description,
      duration,
      moviebase64Image1,
    };

    data.cast = castdetails;

    console.log(data);

    axios
      .post("http://localhost:4000/movie-api/movies", data)

      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddCast = () => {
    setShowModal(false);
    setcastdetails([...castdetails, { castname, castbase64Image1 }]);
    setcastname("");
    setcastBase64Image1("");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 border p-5 rounded-lg m-auto"
      >
        <div className="w-full grid md:grid-cols-2 gap-6 p-5">
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="text"
            name="movies"
            placeholder="Name of the movie"
            onChange={handleInput}
            required
          />
          <select
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            name="category"
            onChange={handleInput}
            required
          >
            <option value="">Select Category</option>
            <option value="UA">UA</option>
            <option value="A">A</option>
            <option value="U">U</option>
          </select>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6 p-5">
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="text"
            name="director"
            placeholder="Director"
            onChange={handleInput}
            required
          />
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="date"
            name="date"
            onChange={handleInput}
            // required
          />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6 p-5">
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={handleInput}
            // required
          />
          <select
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            name="language"
            onChange={handleInput}
            // required
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6 p-5">
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="text"
            name="duration"
            placeholder="Duration"
            onChange={handleInput}
            // required
          />
          <input
            className="h-10 w-2/3 border-2 border-gray-300 rounded-md px-2 text-black"
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleInput}
            // required
          />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6 p-5">
          <label className="border-dashed border-2 border-gray-500 p-4 h-14 w-2/3 rounded cursor-pointer flex flex-col items-center">
            <span className="text-gray-700 text-white">
              Drop Movie Image here
            </span>
            <input
              className="hidden"
              type="file"
              id="images"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleImageChange1}
            />
          </label>
          <button
            className="bg-red-600 w-2/3 text-white py-2 px-4 rounded cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            + Add Cast
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-600 rounded text-white px-4 py-2 flex justify-center"
            type="submit"
          >
            Publish Movie
          </button>
        </div>
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md relative">
            <span
              className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-500 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2 className="text-center text-black font-bold text-xl mb-4">
              Add Cast
            </h2>
            <form className="flex flex-col gap-4">
              <input
                className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
                type="text"
                name="castname"
                placeholder="Castname"
                onChange={handleInput}
                required
              />
              <label className="border-dashed border-2 border-gray-500 p-4 rounded cursor-pointer flex flex-col items-center">
                <span className="text-gray-700">Drop Cast Image here</span> (or)
                <input
                  className="hidden"
                  type="file"
                  id="images"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={handleImageChange2}
                />
              </label>
              <button
                type="button"
                onClick={handleAddCast}
                className="bg-red-600 text-white py-2 rounded cursor-pointer hover:bg-red-700"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;