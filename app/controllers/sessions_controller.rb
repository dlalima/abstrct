class SessionsController < ApplicationController
  
  def new
    if logged_in?
      redirect_to current_user
    end
  end

  def create
  	user = User.find_by({email: params[:email]})
  	session[:user_id] = user.id
  	redirect_to "/drawings/new"
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end
