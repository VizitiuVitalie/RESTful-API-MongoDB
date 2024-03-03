import Post from "./Post.js";

class PostService {
  create(post, picture) {
    if (picture) {
      return Post.create({ ...post, picture });
    } else {
      return Post.create(post);
    }
  }

  getAll() {
    return Post.find();
  }

  getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    return Post.findById(id);
  }

  update(post) {
    if (!post._id) {
      throw new Error("не указан ID");
    }

    return Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
  }

  delete(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    return Post.findByIdAndDelete(id);
  }

  deleteAll() {
    return Post.deleteMany();
  }
}

export default new PostService();
