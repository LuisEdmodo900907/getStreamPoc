Rails.application.routes.draw do
  root 'chat#index'
  get '/register', to: 'users#new'
  resources :users, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
