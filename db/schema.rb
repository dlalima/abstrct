ActiveRecord::Schema.define(version: 20150713194423) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "drawings", force: :cascade do |t|
    t.string   "drawing_img"
    t.integer  "word_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "name",            null: false
    t.string "email",           null: false
    t.string "password_digest", null: false
  end

  create_table "words", force: :cascade do |t|
    t.string "word"
  end

end
