const MovieModel = require("../models/movie.model");

module.exports.addMovie = async (detail) => {
    const {name,plot,director,status,yearReleased,types} = detail;
    if (!name){
        throw {message: "No movie name"};
    }

    if (!plot){
        throw {message: "No movie plot"};
    }
    if (!director){
        throw {message: "No movie director"};
    }
    if (!status){
        throw {message: "No movie status"};
    }
    if (!yearReleased){
        throw {message: "No movie name"};
    }
    if (!types){
        throw {message: "No movie type"};
    }

    return MovieModel.create({name,plot,director,status,yearReleased,types})

};


module.exports.searchMovie = (detail) => {
    return MovieModel.findOne({name: detail, deleted_at:{$exists:false}});
};


module.exports.updateMovie = async (detail) => {
    const {_id, name,plot,director,status,yearReleased,types} = detail;

    return await MovieModel.findOneAndUpdate(
        {_id},
        {name,plot,director,status,yearReleased,types},
        {new:true, omitUnderfined:true}
    );
};

module.exports.sDeleteMovie = async (detail) => {
    const {_id} = detail;
    return await MovieModel.findOneAndUpdate(
        {_id},
        {delete_at: new Date()},
        {new: true}

    );
};