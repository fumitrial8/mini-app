class PostsController < ApplicationController
  
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render new_post_path
    end
  end

  def edit
  end

  def destroy
  end

  def update
  end

  private
  
  def post_params
    params.require(:post).permit(:text, :user_id).merge(user_id: current_user.id)
  end

end
