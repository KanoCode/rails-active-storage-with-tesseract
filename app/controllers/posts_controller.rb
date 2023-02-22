class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  def recent_posts
    @posts = Post.last(3)
    postsArray = []
    @posts.each do |post|
        postsArray << PostSerializer.new(post).serializable_hash[:data][:attributes]
        
    end

    render json: postsArray
  
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    file = post.image_url
    processed = ImageProcessing::MiniMagick
  .source(file)
  .convert("png")
  .call
    image = RTesseract.new(processed.path)
    response =  image.to_s # Getting the value
    post.img_text = response 

    render json: PostSerializer.new(post).serializable_hash[:data][:attributes]
  end

  def latest
    post = Post.last
    render json: PostSerializer.new(post).serializable_hash[:data][:attributes]
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    if @post.save
      #  path = url_for(@post.image)

      # image = RTesseract.new(path)
      #  text  = image.to_s
     render json:PostSerializer.new(@post).serializable_hash[:data][:attributes]
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title ,:image) # we permit the image parameter
    end
end
