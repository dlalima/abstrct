Rails.application.routes.draw do
  
  root 'sessions#new'
  
  get    '/login' => 'sessions#new'
  post   '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  

  resources :users, only: [ :new, :create, :show ]
  
  resources :drawings, only: [ :new, :create, :show, :index ]

  resources :words, only: [ :index, :show ]


  # resources :sessions, only: [ :new, :create, :destroy ]

end
