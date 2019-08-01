class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @posts = Post.all.page(params[:page]).per(5).order("created_at DESC")
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

  def show
    @post = Post.find(params[:id])
    gon.post = @post
  end

  def edit
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to root_path
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    redirect_to root_path
  end

  private
  
  def post_params
    params.require(:post).permit(:text, :user_id, :latitude, :longitude).merge(user_id: current_user.id)
  end

end
