class DrawingsController < ApplicationController
	
	# before_action :set_drawing, only: [:show]
	before_action :logged_in?

	def new
		random_num = rand(Word.all.length)
		@random_word = Word.all[random_num]
	end

  # create a new drawing
	def create 
		timestamp = Time.now.to_s
    File.open("#{Rails.root}/public/uploads/drawing_#{timestamp}.png", 'wb') do |f|
      f.write(params[:image].read)
    end
    drawing = Drawing.new
    drawing.drawing_img = "/uploads/drawing_#{timestamp}.png"
    drawing.word_id = params[:word_id]
    drawing.save
    render nothing: true
	end

	def show
		drawing = Drawing.find(params[:id])
		render json: drawing
	end

	def index
		@drawings = Drawing.all
	end


	private
	
	def set_drawing
		@drawing = Drawing.find(params[:id])
	end

end
