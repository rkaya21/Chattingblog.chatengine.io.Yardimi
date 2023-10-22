const express = require("express");
const cors = require("cors");
const axios = require('axios'); // axios modülünü dahil edin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "4484e5ef-b085-400c-9f56-5d2cca8be4c4" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
