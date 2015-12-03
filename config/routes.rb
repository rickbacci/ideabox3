Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :ideas, only: [:show, :index, :create, :update, :destroy]
    end
  end
  root to: 'api/v1/ideas#index'
end
