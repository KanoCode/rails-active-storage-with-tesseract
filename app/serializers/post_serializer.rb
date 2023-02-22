class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :created_at, :updated_at, :image_url, :img_text
end
