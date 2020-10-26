// functions/move.js
exports.handler = async function(event, context) {
  return {
      statusCode: 200,
      body: JSON.stringify({message: "Gotta move on"})
  };
}

// GET localhost:8888/.netlify/functions/move
// → Gotta move on
 