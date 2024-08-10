import React, { useState } from "react";
import axios from "axios";

const Movies=()=> {
  const [movies, setMovies] = useState("");
  const [category, setCategory] = useState("");
  const [director, setDirector] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [castname, setcastname] = useState([]);
  const [moviebase64Image1, setmovieBase64Image1] = useState("");
  const [castbase64Image1, setcastBase64Image1] = useState([]);


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

  const handlecastname = (e) => {
    const { name, value } = e.target;
    setcastname((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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

    reader.onloadend = () => {
      setcastBase64Image1((prev) => [...prev, reader.result.toString()]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const data = {
      movies,
      category,
      director,
      date,
      genre,
      language,
      description,
      duration,
      castname,
      moviebase64Image1,
      castbase64Image1,
    };

    console.log(data);

    axios
      .post("http://localhost:4000/api/movies", data)
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
  };

  return (
    <div className="flex flex-col gap-6 bg-black p-6 text-white">
      <h2 className="text-xl font-bold">Add Movies</h2>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <h3>Movie Title</h3>
        <h3>Category</h3>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <input
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          type="text"
          name="movies"
          placeholder="Name of the movie"
          onChange={handleInput}
          required
        />
        <select
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          name="category"
          onChange={handleInput}
          required
        >
          <option value="">Select Category</option>
          <option value="Action">UA</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <h3>Movie Director</h3>
        <h3>Release Date</h3>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <input
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleInput}
          required
        />
        <input
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          type="date"
          name="date"
          onChange={handleInput}
          required
        />
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <h3>Genre</h3>
        <h3>Language</h3>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <input
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleInput}
          required
        />
        <select
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          name="language"
          onChange={handleInput}
          required
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Spanish">Hindi</option>
          <option value="French">Telugu</option>
        </select>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <h3>Duration</h3>
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
        <input
          className="h-10 border-2 border-gray-300 rounded-md px-2 text-black"
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={handleInput}
          required
        />
      </div>
      <div className="w-full grid md:grid-cols-1 gap-6">
        <h3>Movie Description</h3>
      </div>
      <div className="w-full grid md:grid-cols-1 gap-6">
        <textarea
          className="border-2 border-gray-300 rounded-md px-2 text-black"
          name="description"
          placeholder="Description"
          rows="4"
          onChange={handleInput}
          required
        />
      </div>
      <div className="w-full grid md:grid-cols-2 gap-6">
      <label className="border-dashed border-2 border-gray-500 p-4 rounded cursor-pointer flex flex-col items-center">
                <span className="text-gray-700 text-white">Drop Movie Image here</span> 
                <input
                  className="hidden"
                  type="file"
                  id="images"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={handleImageChange1}
                />
              </label>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          + Add Cast
        </button>
      </div>
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
                type="text"
                value={castname}
                onChange={handlecastname}
                required
                placeholder="Name"
                className="p-2 border border-gray-300 rounded"
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
      <button
        className="bg-red-600 rounded text-white px-4 py-2"
        type="submit"
        onClick={handleSubmit}
      >
        Publish Movie
      </button>
    </div>
  );
}

export default Movies;