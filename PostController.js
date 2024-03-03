import PostService from "./PostService.js";
import { EXTERNAL_URL } from "./index.js";
import FileService from "./FileService.js";

class PostController {
  async create(req, res) {
    try {
      let fileName = null;

      if (req.files?.picture?.data) {
        fileName = FileService.saveFile(req.files.picture.data);
      }

      const post = await PostService.create(req.body, fileName);

      const responsePost = {
        ...post,
        picture: fileName ? EXTERNAL_URL + "/static/" + fileName : null,
      };

      return res.json(responsePost);
    } catch (e) {
      return res.status(500).json({ error: true, message: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteAll(req, res) {
    try {
      const post = await PostService.deleteAll();
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
