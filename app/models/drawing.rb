class Drawing < ActiveRecord::Base
	belongs_to :user
	belongs_to :word
end