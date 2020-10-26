// functions/move.js
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Gotta move on"
  });
};

// GET localhost:8888/.netlify/functions/move
// → Gotta move on
 