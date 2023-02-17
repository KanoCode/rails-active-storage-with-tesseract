Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'latest' , to: 'posts#latest'
  get 'recent_posts' , to: 'posts#recent_posts'
  # Defines the root path route ("/")
  # root "articles#index"
end
