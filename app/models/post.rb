class Post < ApplicationRecord

    has_many_attached :images
    
    def image_urls
        images.map{ |img| Rails.application.routes.url_helpers.url_for(img) }
    end
end
