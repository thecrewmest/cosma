Rails.application.routes.draw do

  root to: 'site#index'

  get '/dashboard', to: 'app#index'

  get '/signup', to: 'users#new'

  post '/signup', to: 'users#create'

  get '/login', to: 'sessions#new'

  get '/forgot_password', to: 'sessions#forgot_password'
  
  get 'pages/index'

  namespace :api do
    namespace :v1 do
      
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
