Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get    '/ideas',     to: 'ideas#index'
      post   '/ideas',     to: 'ideas#create'
      delete '/ideas/:id', to: 'ideas#destroy'
    end
  end
  root to: 'api/v1/ideas#index'
end
