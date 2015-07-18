class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

	def current_user
    session[:user_id]
  end

  helper_method(:current_user)

  def logged_in?
    redirect_to '/login' if !current_user.nil?
  end 

end
