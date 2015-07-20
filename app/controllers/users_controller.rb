class UsersController < ActionController::Base

	before_action :set_user, only: [:show]
	
	def show
    @user = User.find params[:id]
	end

	def new
   # form for new users
	end

	def create 
   # create a new user in DB
   	user = User.create({
    name: params[:name],
    email: params[:email],
    password: params[:password],
    password_confirmation: params[:password_confirmation]})
    
    redirect_to '/drawings/new' if user
 	end


	private
	
	def set_user
		@user = User.find(params[:id])
	end

end

