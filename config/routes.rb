Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # all api endpoints (routes) go in here
  namespace :api do
    get '/facts', to: 'facts#index'

  end
  # resources :things

end
