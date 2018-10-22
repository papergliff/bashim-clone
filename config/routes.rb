Rails.application.routes.draw do
  constraints format: :json do
    namespace :api do
      namespace :v1 do
        resources :quotes, only: [:index, :create] do
          member do
            patch :upvote
            patch :downvote
          end
        end
      end
    end
  end
  root to: 'home#index'
end
