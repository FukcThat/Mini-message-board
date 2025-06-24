const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages })
);
indexRouter.get("/new", (req, res) => res.render("Form"));

indexRouter.post("/new", (req, res) => {
  const { userName, messageText } = req.body;

  if (!userName || !messageText) {
    return res.status(400).send("Both name and message are required.");
  }

  messages.push({ text: messageText, user: userName, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message });
});

module.exports = indexRouter;
