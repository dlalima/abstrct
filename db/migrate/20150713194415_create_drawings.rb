class CreateDrawings < ActiveRecord::Migration
  def change
    create_table :drawings do |t|
	    t.string :drawing_img
	    t.integer :word_id
	    t.integer :user_id
	    t.timestamps
    end
  end
end
