const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  //Copy req.query
  const reqQuery = { ...req.query }; //copying the req.query object intro reqQuery using the spread operator

  //Fields to exclude - meaning that these won't be look at as actual fields in our database; for example if we use select in order to search by certain fields like ?select=name, that's not a field in our bootcamps db and we want to exclude it
  const removeFields = ["select", "sort", "page", "limit"];

  //Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // console.log(reqQuery);

  //Create query string
  let queryStr = JSON.stringify(reqQuery);

  //Create operators like ($gt, $gte, $lt, $lte, $in)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  ); //we want to extract params from query like lte (less or equal than) and add $ in front of it because these are mongoose variables

  console.log(queryStr);

  //Finding resource
  query = model.find(JSON.parse(queryStr));

  //SELECT fields
  if (req.query.select) {
    //we want to do this only if select is provided in the url
    const fields = req.query.select.split(",").join(" "); //wherever there's a comma, split it into an array because in our url, we are going to have something like select=name,description in order to
    //select multiple fields to get by and the official syntax is querry.select(name description), so they are separated by a space, not a comma
    console.log(fields);
    query = query.select(fields);
  }

  //Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt"); //the default sorting is going to be descending indicate by the -, and date createdAt
  }

  //Pagination
  const page = parseInt(req.query.page, 10) || 1; //parseInt takes in a second parameter which in our case it's going to be 10 because that's the base in which we are converting our number
  const limit = parseInt(req.query.limit, 10) || 40; //40 per page
  const startIndex = (page - 1) * limit; //skip a certain amount of resources
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  //Executing our query
  const results = await query;

  //Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit: limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination: pagination,
    data: results,
  };

  next();
};

module.exports = advancedResults;
