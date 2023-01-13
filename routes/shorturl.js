import { Router } from "express";
import { promises as dnsPromises } from "node:dns";

const router = Router();

function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (!isValidHttpUrl(url))
    return res.json({
      error: "invalid url",
    });

  res.send({
    original_url: url,
    short_url: "",
  });
});

router.get("/:shortURL", (req, res) => {
  const { shortURL } = req.params;

  res.redirect();
});

export default router;
